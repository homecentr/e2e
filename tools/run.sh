#!/usr/bin/env bash

ENV_NAME=$1

echo "Loading environment variables..."

set -a
source ./environments/$ENV_NAME.env
set +a

echo "Starting webdriver container..."
docker-compose up --force-recreate --detach --remove-orphans

echo "Running nightwatch..."
TST_COMMAND="nightwatch ${@:2}"
eval $TST_COMMAND

# echo "Shutting down webdriver container..."
# docker-compose down