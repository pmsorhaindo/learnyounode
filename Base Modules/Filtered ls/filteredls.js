var fs = require('fs');
var path = require('path');
var filePathToFolder = process.argv[2];
var extensionToFilter = process.argv[3];

var filterFileList = function(err, list) {
    for(i = 0; i<list.length; i++) {
        if(("."+extensionToFilter) == path.extname(list[i]))
        {
            console.log(list[i]);
        }
    }
}

fs.readdir(filePathToFolder,filterFileList);