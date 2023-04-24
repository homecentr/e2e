#!/usr/bin/env bash

ENVIRONMENT=$1
CLIENT_MODE=$2
ARGS=$3

export CMD="cypress run --browser electron $ARGS"

docker-compose --env-file ./environments/$1.$2.env up