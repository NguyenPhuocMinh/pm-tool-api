#!/usr/bin/env bash

# Acess permission when run .sh file
sudo chmod +x deploy.sh

ls

helm list
echo $APP_DEPLOYED_USER
# create helm chart