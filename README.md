
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