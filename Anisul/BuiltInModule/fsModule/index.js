// Built in Function || fs module
const fs = require('fs');

// use tradional/normal function
// fs.writeFile('demo1.txt','This is demo one, Hi shawon', function(error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("successful");
//     }
// })

// arrow function 
// fs.writeFile('demo1.txt','This is demo one, Hi shawon.', (error) =>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log("successful");
//     }
// })

// append/update file
// fs.appendFile('demo1.txt','I am 30 years old.', (error) =>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log("successful");
//     }
// })

// read file
// fs.readFile('demo1.txt','utf-8', (error,data) =>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// })

// rename file name
// fs.rename('demo1.txt','shawon.txt', (error) =>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log("successful");
//     }
// })

// unlink/delete a file
fs.unlink('shawon.txt', (error) =>{
    if(error){
        console.log(error);
    }else{
        console.log("successful");
    }
})