REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY 

sudo yarn install

sudo yarn add next

sudo pm2 reload all