#!/usr/bin/env bash

# halt if any error occurs
set -e  

ACCOUNT=$(eval echo "\$${CIRCLE_BRANCH}_NSCONF_ACCOUNT")

echo "export NSCONF_ACCOUNT=${ACCOUNT:-$NSCONF_ACCOUNT}" >> $BASH_ENV

echo "end build"

