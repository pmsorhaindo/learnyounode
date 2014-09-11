var http = require('http');
var urlLocation = process.argv[2]

var httpResponseCallback = function(response){
    
    response.setEncoding('utf8');
    response.on("data",function(data){
       console.log(data); 
    });
}

http.get(urlLocation, httpResponseCallback);