#!/usr/bin/env bash

# halt if any error occurs
set -e  

# Acess permission when run .sh file
sudo chmod +x deploy.sh

ls

helm list

echo "${CIRCLE_BRANCH}"

printenv