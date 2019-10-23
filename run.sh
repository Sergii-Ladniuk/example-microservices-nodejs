cd book-svc
npm ci
npm run build:prod

cd ../user-svc
npm ci
npm run build:prod

cd ../facade-svc
npm ci
npm run build:prod

cd ..
pm2 delete all
pm2 start pm2.config.js
