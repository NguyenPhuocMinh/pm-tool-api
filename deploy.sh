#!/usr/bin/env bash

# halt if any error occurs
set -e  

echo $1
echo $2

echo "Login aws...."

aws ecr get-login-password --region $1 | helm registry login --username AWS --password-stdin $2.dkr.ecr.$1.amazonaws.com

echo "end build"

