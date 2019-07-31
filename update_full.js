var fs = require("fs");
var contents = fs.readFileSync("./dist/components-web/package.json");
// Define to JSON type
var jsonContent = JSON.parse(contents);



delete jsonContent['scripts'];
delete jsonContent['devDependencies'];
delete jsonContent['bugs'];
delete jsonContent['repository'];

fs.writeFileSync("./dist/components-web/package.json", JSON.stringify(jsonContent));
console.log('Done!');
