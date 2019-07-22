rm -rf ./dist
webpack --config webpack.config.js
rm ./dist/*.js
cp -R ./src ./dist/src
cp ./package.json ./dist/package.json
node update_full.js
