docker start 9df31ec0b344 &&
cd /home/root/nextjs-blog &&
git pull &&
yarn install --production=false &&
yarn build &&
docker build -t wang/a . &&
docker kill app &&
docker rm app
docker run --name app --network=host -p 3000:3000 -d wang/a &&
echo "done"

