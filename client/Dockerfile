FROM nginx
WORKDIR /usr/share/nginx/html
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_4.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y build-essential
COPY . /usr/share/nginx/html
COPY mime.types /etc/nginx/
RUN npm install
RUN npm run build
EXPOSE 80
