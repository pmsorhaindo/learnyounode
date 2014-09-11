var fs = require('fs');
var path = require('path');

var filterDirectory = function(directoryName, fileExtension, callback) {
    
    var filterFileList = function(err, list){
        if (err) return callback(err);
        
        var returnList = [];
        for(i = 0; i<list.length; i++) {
            
            if(("."+fileExtension) == path.extname(list[i]))
            {
                returnList.push(list[i]);
            }
        }
        callback(null,returnList);
    }
    
    fs.readdir(directoryName,filterFileList);
    
}

module.exports = filterDirectory;