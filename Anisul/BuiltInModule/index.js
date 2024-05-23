// Built in Function || fs module
const fs = require('fs');

// use tradional/normal function
fs.writeFile('demo1.txt','This is demo one, Hi shawon', function(error){
    if(error){
        console.log(error);
    }else{
        console.log("successful");
    }
})