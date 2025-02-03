#!/bin/bash

source /home/PersonalPortofolio/.env

MESSAGE="🚀 Deployment complete on VPS!"

curl -s -X POST "https://api.telegram.org/bot$BOT_TOKEN/sendMessage" \
     -d "chat_id=$CHAT_ID" \
     -d "text=$MESSAGE"
