
# start

## create database with docker
1. 
```shell
cd  <current project path>;
mkdir blog-data;
docker run -v "$PWD/blog-data":/var/lib/postgresql/data -p 5432:5432 -e POSTGRES_USER=blog -e POSTGRES_HOST_AUTH_METHOD=trust -d postgres:12.2
```
2. yarn 
3. yarn run ss