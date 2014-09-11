var http = require('http');

http.get(process.argv[2],function(response){
    var dataList = [];
    response.setEncoding('utf8');
    response.on("data",function(data){
        dataList.push(data);
    });
    response.on("err",function(errorMessage){
        console.err(errorMessage);
    });
    response.on("end",function(){
        var characterSum = 0;
        var appendedString = "";
        for(i = 0; i<dataList.length; i++)
        {
            characterSum += dataList[i].length;
            appendedString += dataList[i];
        }
        console.log(characterSum);
        console.log(appendedString);
    });
    
    
});