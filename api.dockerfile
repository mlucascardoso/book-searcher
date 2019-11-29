FROM node:latest

COPY . /var/www

WORKDIR /var/www
ENV PORT=3000

RUN npm install

ENTRYPOINT [ "npm", "start" ]