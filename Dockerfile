#  https://nodejs.org/zh-cn/docs/guides/nodejs-docker-webapp/
FROM node:14
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]