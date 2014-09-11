var http = require('http');
data1 = "";
data2 = "";
data3 = "";

data1Finished = false;
data2Finished = false;
data3Finished = false;

var checkAllFinishedAndPrint = function(){
    if(data1Finished && data2Finished && data3Finished)
    {
        console.log(data1);
        console.log(data2);
        console.log(data3);
    }
}

var errorFunc = function(errorMessage){
    console.error(errorMessage);
}

http.get(process.argv[2],function(response){
   
    response.on("data",function(data){
        data1 += data;
    })
    response.on("err",errorFunc)
    response.on("end",function(){
        data1Finished = true;
        checkAllFinishedAndPrint();
    });
    
});

http.get(process.argv[3],function(response){
   
    response.on("data",function(data){
        data2 += data;
    })
    response.on("err",errorFunc)
    response.on("end",function(){
        data2Finished = true;
        checkAllFinishedAndPrint();
    });
    
});

http.get(process.argv[4],function(response){
   
    response.on("data",function(data){
        data3 += data;
    })
    response.on("err",errorFunc)
    response.on("end",function(){
        data3Finished = true;
        checkAllFinishedAndPrint();
    });
    
});