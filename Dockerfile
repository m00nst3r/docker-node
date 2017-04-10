FROM node:boron-alpine

# RUN apk --update add curl

# HEALTHCHECK CMD curl --fail http://localhost:9000/guid/ || exit 1 

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

RUN adduser -D app && chown -R app /usr/src/app

CMD [ "npm", "start" ]
