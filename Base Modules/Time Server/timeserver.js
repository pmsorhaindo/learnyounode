var net = require('net');

var padLeft = function(num,value,size){
    str = num+"";
    while(str.length < size){
        str = value+str
    }
    return str;
}

server = net.createServer(function(socket){
    //socket.write();
    date = new Date();
    year = date.getFullYear();
    month = padLeft((date.getMonth()+1),"0",2);
    day = padLeft(date.getDate(),"0",2);
    hours = padLeft(date.getHours(),"0",2);
    minutes = padLeft(date.getMinutes(),"0",2);
    
    socket.end(year+"-"+month+"-"+day+" "+hours+":"+minutes+"\n");
});

server.listen(process.argv[2]);
