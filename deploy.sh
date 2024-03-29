#!/usr/bin/env bash

# halt if any error occurs
set -e

APP_AWS_REGION=$1
APP_AWS_ACCOUNT_ID=$2
APP_HELM_TAG=$3
APP_BASE_PATH_REST_API=$4
APP_MONGO_URI=$5

echo APP_AWS_REGION=$APP_AWS_REGION
echo APP_AWS_ACCOUNT_ID=$APP_AWS_ACCOUNT_ID
echo APP_HELM_TAG=$APP_HELM_TAG

echo "Helm uninstall old version..."
helm uninstall pm-tool-api

echo "Sleep 10s..."
sleep 10

echo "Login aws...."
aws ecr get-login-password --region $APP_AWS_REGION | helm registry login --username AWS --password-stdin $APP_AWS_ACCOUNT_ID.dkr.ecr.$APP_AWS_REGION.amazonaws.com

echo "Helm install new version..."
helm install --set MONGO_URI=$APP_MONGO_URI --debug pm-tool-api oci://$APP_AWS_ACCOUNT_ID.dkr.ecr.$APP_AWS_REGION.amazonaws.com/pm-tool-api --version $APP_HELM_TAG

echo "Check helm install success..."
helm list

echo "Sleep 100s..."
sleep 100

echo "Check host run success..."
curl $APP_BASE_PATH_REST_API

echo "End build"
