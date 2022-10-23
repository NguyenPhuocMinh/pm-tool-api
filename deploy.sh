#!/usr/bin/env bash

# halt if any error occurs
set -e

APP_AWS_REGION=$1
APP_AWS_ACCOUNT_ID=$2
APP_HELM_TAG=$3

echo APP_AWS_REGION=$APP_AWS_REGION
echo APP_AWS_ACCOUNT_ID=$APP_AWS_ACCOUNT_ID
echo APP_HELM_TAG=$APP_HELM_TAG

# uninstall pm-tool-api chart
helm uninstall pm-tool-api

echo "Login aws...."

aws ecr get-login-password --region $APP_AWS_REGION | helm registry login --username AWS --password-stdin $APP_AWS_ACCOUNT_ID.dkr.ecr.$APP_AWS_REGION.amazonaws.com

# install helm chart from aws ecr
helm install pm-tool-api oci://$APP_AWS_ACCOUNT_ID.dkr.ecr.$APP_AWS_REGION.amazonaws.com/pm-tool-api --version $APP_HELM_TAG

echo "End build"
