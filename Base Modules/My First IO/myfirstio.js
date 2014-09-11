var fs = require('fs');

var bufferObj = fs.readFileSync(process.argv[2]);

var fileString = bufferObj.toString();

var fileLinesArray = fileString.split('\n');

var result = fileLinesArray.length-1;

console.log(result);