FROM node:argon
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN node docker-build.js
RUN npm install
EXPOSE 4547
CMD node ./server.js
