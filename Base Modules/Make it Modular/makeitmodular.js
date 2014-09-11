var firstModule = require('./myfirstmodule');

var printer = function(err,data){
    if (err)
    {
        console.log(err);
    }
    else
    {
        for (i=0;i<data.length;i++)
        {
            console.log(data[i]);
        }
    }
}

firstModule(process.argv[2], process.argv[3], printer);