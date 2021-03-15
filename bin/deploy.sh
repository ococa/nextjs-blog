docker start d1a &&
cd /home/root/nextjs-blog &&
git pull &&
yarn install --production=false &&
yarn build &&
docker build -t wang/a . &&
docker run --name app --network=host -p 3000:3000 -d wang/a &&
echo "done"

