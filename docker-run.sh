#!/bin/bash

echo "=============================="

ZERO=$0
ENV=$1
VERSION=$2
APP_NAME=$3
IMAGE_APP_NAME=$4
PORT=$5

echo $ENV

export APP_NAME_ENV="${APP_NAME}-${ENV}"
export IMAGE_NAME=${IMAGE_APP_NAME}:${VERSION}

echo "image name to use $IMAGE_NAME"

docker rm -f $APP_NAME_ENV

docker run -e FOO="hello world!" \
-e BAR="AWESOME" \
-e PORT=$PORT \
--name $APP_NAME_ENV \
-p $PORT:$PORT \
-d $IMAGE_NAME

echo "=============================="
