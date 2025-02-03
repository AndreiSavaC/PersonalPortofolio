#!/bin/bash

WEBHOOK_PORT=9000
REPO_DIR="/home/PersonalPortofolio"
LOG_FILE="$REPO_DIR/webhook.log"
ENV_FILE="/home/PersonalPortofolio/.env"

source /home/PersonalPortofolio/.env

function deploy {
    echo "$(date) - Received webhook, updating repository..." >> $LOG_FILE
    cd $REPO_DIR || exit

    echo "$(date) - Running git pull..." >> $LOG_FILE
    git pull origin main >> $LOG_FILE 2>&1

    echo "$(date) - Running docker compose up..." >> $LOG_FILE
    docker compose up -d --build >> $LOG_FILE 2>&1

    echo "$(date) - Deployment completee!" >> $LOG_FILE

    echo "$(date) - Running docker system prune..." >> $LOG_FILE
    docker system prune -a --volumes -f >> $LOG_FILE 2>&1
    echo "$(date) - Prune complete!" >> $LOG_FILE

    echo "$(date) - Running send_notification.sh..." >> $LOG_FILE
    /home/PersonalPortofolio/send_notification.sh >> $LOG_FILE 2>&1
    echo "$(date) - Notification script executed!" >> $LOG_FILE
}


while true; do
    { 
      read request_line
      echo "$(date) - Received request: $request_line" >> "$LOG_FILE"

      if echo "$request_line" | grep -q "POST"; then
          deploy
      fi

      while IFS= read -r header && [ "$header" != $'\r' ] && [ -n "$header" ]; do
          :
      done

      echo -e "HTTP/1.1 200 OK\r\nContent-Length: 0\r\n\r\n"
    } | nc -l -p "$WEBHOOK_PORT" -q 1
done
