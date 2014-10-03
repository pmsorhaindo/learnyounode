var fs = require('fs');
var through = require('through');
var split = require('split');

var counter  = 0;

process.stdin
    .pipe(split()).pipe(through(function(line){
        if(counter % 2) // even
        {
           this.queue(line.toString().toUpperCase()+"\n");
        }
        else {
            this.queue(line.toString().toLowerCase()+"\n");
        }
        counter++;
    }))
    .pipe(process.stdout);

