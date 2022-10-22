#!/usr/bin/env bash

# halt if any error occurs
set -e  

# Acess permission when run .sh file
sudo chmod +x deploy.sh

# echo "export AWS_ACCESS_KEY_ID=${APP_AWS_ACCESS_KEY}"
# echo "export AWS_SECRET_ACCESS_KEY=${APP_AWS_SECRET_KEY}"

echo ${MY_ENV_VAR}
echo ${APP_AWS_ACCESS_KEY}

echo "Circle branch===$CIRCLE_BRANCH"

echo "AWS_ACCESS_KEY_ID====$AWS_ACCESS_KEY_ID"

echo "AWS_SECRET_ACCESS_KEY====$AWS_ACCESS_KEY_ID"

echo "end build"

