#!/bin/bash

WEBHOOK_PORT=9000
REPO_DIR="/home/PersonalPortofolio"
LOG_FILE="$REPO_DIR/webhook.log"
ENV_FILE="/home/PersonalPortofolio/.env"

source /home/PersonalPortofolio/.env

function deploy {
    echo "$(date) - Received webhook, updating repository..." >> $LOG_FILE
    cd $REPO_DIR || exit
    git pull origin main >> $LOG_FILE 2>&1
    docker compose up -d --build >> $LOG_FILE 2>&1
    echo "$(date) - Deployment complete!" >> $LOG_FILE
    docker system prune -a --volumes -f
    echo "$(date) - Prune complete!" >> $LOG_FILE
    /home/PersonalPortofolio/send_notification.sh  
}

while true; do
    nc -l -p $WEBHOOK_PORT -q 1 | while read -r line; do
        if echo "$line" | grep -q "POST /webhook"; then
            if echo "$line" | grep -q "X-Hub-Signature: $WEBHOOK_SECRET"; then
                deploy &
            else
                echo "$(date) - Invalid webhook signature" >> $LOG_FILE
            fi
        fi
    done
done
