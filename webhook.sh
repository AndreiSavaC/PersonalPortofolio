#!/bin/bash
set +e  # Dezactivează oprirea imediată la eroare

WEBHOOK_PORT=9000
REPO_DIR="/home/PersonalPortofolio"
LOG_FILE="$REPO_DIR/webhook.log"
ENV_FILE="/home/PersonalPortofolio/.env"

source /home/PersonalPortofolio/.env

function deploy {
    set +e  # Asigură-te că în funcție nu se oprește la eroare
    echo "$(date) - Received webhook, updating repository..." >> $LOG_FILE
    cd $REPO_DIR || { echo "$(date) - Failed to cd into $REPO_DIR" >> $LOG_FILE; return 1; }

    echo "$(date) - Running git pull..." >> $LOG_FILE
    git pull origin main >> $LOG_FILE 2>&1
    echo "Exit code for git pull: $?" >> $LOG_FILE

    echo "$(date) - Running docker compose up..." >> $LOG_FILE
    docker compose up -d --build >> $LOG_FILE 2>&1
    echo "Exit code for docker compose up: $?" >> $LOG_FILE

    echo "$(date) - Deployment complete!" >> $LOG_FILE

    echo "$(date) - Running docker system prune..." >> $LOG_FILE
    docker system prune -a --volumes -f >> $LOG_FILE 2>&1
    echo "Exit code for docker system prune: $?" >> $LOG_FILE
    echo "$(date) - Prune complete!" >> $LOG_FILE

    echo "$(date) - Running send_notification.sh..." >> $LOG_FILE
    /home/PersonalPortofolio/send_notification.sh >> $LOG_FILE 2>&1
    echo "Exit code for send_notification.sh: $?" >> $LOG_FILE
    echo "$(date) - Notification script executed!" >> $LOG_FILE
}

while true; do
    nc -l -p $WEBHOOK_PORT -q 1 > /tmp/nc_output.tmp
    while read -r line; do
        if echo "$line" | grep -q "POST /webhook"; then
            if echo "$line" | grep -q "X-Hub-Signature: $WEBHOOK_SECRET"; then
                # Folosește setsid pentru a preveni terminarea din cauza SIGHUP
                setsid deploy >> $LOG_FILE 2>&1 &
            else
                echo "$(date) - Invalid webhook signature" >> $LOG_FILE
            fi
        fi
    done < /tmp/nc_output.tmp
done
