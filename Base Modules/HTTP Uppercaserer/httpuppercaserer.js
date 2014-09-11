var http = require('http');
var t2map = require('through2-map');

server = http.createServer(function(request,response){
    
    if(request.method == 'POST')
    {
        request.on("data", function(chunk){
           response.write(chunk.toString().toUpperCase());
        });
        
        request.on("end",function(){
             response.end();
        });
    }
    else
    {
        response.end();
    }
    
    
});

server.listen(process.argv[2])