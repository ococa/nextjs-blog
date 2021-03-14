
# start

## create a database with docker
1. 
```shell
cd  <current project path>;
mkdir blog-data;
docker run -v "$PWD/blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2
```
2. yarn 
3. yarn run ss

## create database
```shell
CREATE DATABASE blog_development ENCODING 'UTF8' LC_COLLATE 'en_US.utf8' LC_CTYPE 'en_US.utf8';
```
## create Table in database
``` shell
typeorm migration:create -n <TableName>
eg: yarn run m:create -n CreateUsers
```

## operation with psql
```shell
# 0. comming into docker
docker exec -it <docker id> bash;
# 1. connect 
psql -U <username>

# 2. show databse list
\l 
\list
# 3. go in a database
\c <databse name>
# 4. show relations
\dt 

```



## setting environment(两种配置密钥的方式)
1. 设置bash环境
```shell
##  密钥存储， 设置环境变量
export COOKIE_SECRET=670344603478587867034460347858786703446034785878

## 获取方式
process.env.process.env.COOKIE_SECRET
```
2. 第二种 .env.local文件方式
   https://nextjs.org/docs/basic-features/environment-variables



## docker化我们的应用

1. 创建docker file文件
   
```shell
touch Dockerfile
```
Dockerfile内容
```shell
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "start" ]
```

2. 
```shell
touch .dockerignore
# 内容
node_modules
npm-debug.log
```

3. 构建docker 应用
```shell
# YOUR NAME 
docker build -t <your username>/node-web-app .
```

4. 执行docker应用
```shell
# 3000是docker应用里面我们应用启动的端口， 3001是我们希望访问docker的端口
docker run -p 3001:3000 -d <your username>/node-web-app
```
