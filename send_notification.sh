#!/bin/bash

source /home/PersonalPortofolio/.env

CURRENT_TIME=$(date "+%Y-%m-%d %H:%M:%S")

MESSAGE="🚀 Deployment complete on VPS! ✅\n📅 Date: $CURRENT_TIME"

curl -s -X POST "https://api.telegram.org/bot$BOT_TOKEN/sendMessage" \
     -d "chat_id=$CHAT_ID" \
     -d "text=$MESSAGE"
