var http = require('http');
var fs = require('fs');

server = http.createServer(function(request, response){
    
    src = fs.createReadStream(process.argv[3]);
    src.pipe(response)
    src.on("end",function(){
        response.end();
    })
    
})

server.listen(process.argv[2]);