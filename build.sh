export NODE_OPTIONS=--openssl-legacy-provider
rm -rf ./dist
webpack --config webpack.config.js
rm ./dist/*.js
cp -R ./src ./dist/components-web/src
cp ./package.json ./dist/components-web/package.json
node update_full.js
