var http = require('http');
var url = require('url');


server = http.createServer(function(request,response){
    
    if (request.method == 'GET')
    {
        req = url.parse(request.url,true);
        timeString = req.query.iso
        response.writeHead(200,{'Content-Type': 'application/json'});
        if(req.pathname == "/api/parsetime")
        {
            date = new Date(timeString);
            obj = {
                hour:date.getHours(),
                minute:date.getMinutes(),
                second:date.getSeconds()
            };
            response.end(JSON.stringify(obj));
        }
        if(req.pathname == "/api/unixtime")
        {
            date = new Date(timeString);
            obj = {unixtime: date.getTime()};
            response.end(JSON.stringify(obj));
        }
        else
        {
            response.end();   
        }
    }
    else
    {
        response.end();
    }
    
});

server.listen(process.argv[2]);