#!/usr/bin/env bash

CLIENT_MODE=$1
ENVIRONMENT=$2
ARGS=$3

export CMD="cypress run --browser electron $ARGS"

docker-compose -f ./environments/$1.$2.yml up