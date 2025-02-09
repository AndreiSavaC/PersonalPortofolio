#!/usr/bin/env bash

LOGFILE="/home/PersonalPortofolio/webhook.log"

exec &>> "$LOGFILE"

set -x

echo -e "\n[$(date)] -- Webhook script START --"

read_all_input() {
  local data
  data=$(cat)
  echo "$data"
}

process_request() {
  local raw_request="$1"

  local headers body
  headers="$(echo "$raw_request" | sed -E '1,/^\r$/!d')"
  body="$(echo "$raw_request" | sed -E '1,/^\r$/d')"

  local signature_header
  signature_header="$(echo "$headers" | grep -i '^X-Hub-Signature-256:' | head -n1 | sed -E 's/^[^:]+:\s*//I')"
  signature_header="$(echo "$signature_header" | tr -d '\r')"

  if [ -z "$signature_header" ]; then
    send_http_response "400 Bad Request" "Missing X-Hub-Signature-256"
    echo "[$(date)] -- Missing X-Hub-Signature-256 --"
    exit 0
  fi

  local signature_value="${signature_header#sha256=}"

  source /home/PersonalPortofolio/.env

  local expected
  expected="$(printf "%s" "$body" | openssl dgst -sha256 -hmac "$WEBHOOK_SECRET" | cut -d ' ' -f2)"

  if [ "$expected" != "$signature_value" ]; then
    send_http_response "401 Unauthorized" "Invalid signature"
    echo "[$(date)] -- Invalid signature --"
    exit 0
  fi

  echo "[$(date)] -- Signature valid --"

  cd /home/PersonalPortofolio || exit

  /home/PersonalPortofolio/send_start_notification.sh

  git pull origin main

  docker compose up -d --build 

  /home/PersonalPortofolio/send_finish_notification.sh

  send_http_response "200 OK" "Deployment successful!"
  echo "[$(date)] -- Deployment successful! --"
}

send_http_response() {
  local status="$1"
  local message="$2"
  echo -e "HTTP/1.1 $status\r"
  echo -e "Content-Type: text/plain\r"
  echo -e "\r"
  echo -e "$message\r"
}

main() {
  local input
  input="$(read_all_input)"
  process_request "$input"
}

main

echo "[$(date)] -- Webhook script END --"
