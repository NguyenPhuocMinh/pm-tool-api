#!/usr/bin/env bash

# halt if any error occurs
set -e  

$APP_AWS_REGION=$1
$APP_AWS_ACCOUNT_ID=$2

echo APP_AWS_REGION=$APP_AWS_REGION
echo APP_AWS_ACCOUNT_ID=$APP_AWS_ACCOUNT_ID

# cd deploy

# helm package pm-tool-api

# uninstall pm-tool-api chart
# helm uninstall pm-tool-api

echo "Login aws...."

aws ecr get-login-password --region $APP_AWS_REGION | helm registry login --username AWS --password-stdin $APP_AWS_ACCOUNT_ID.dkr.ecr.$APP_AWS_REGION.amazonaws.com


echo "end build"

