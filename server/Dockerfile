FROM node:argon
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN set -ex \
    && npm install \
    && npm install -g nodemon
EXPOSE 8080
CMD nodemon ./server.js
