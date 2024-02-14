//Exloring file System module
const { error } = require('console');
const fs =require('fs');
const { METHODS } = require('http');

//Creating a module
// fs.mkdir("Path Mdule",(err)=>{
//     console.log(err,"Done");
// });

// Creating a file
// fs.writeFile(
//     "Path Mdule/fs1.txt","Hi,Deepak",(errors)=>{
//         console.log(errors,"Done");
//     }
// );

//Adding more text
// fs.appendFile(
//     "Path Mdule/fs1.txt"," How are you?",(error)=>{
//         console.log("Done");
//     }
// )


//Reading data
// fs.readFile(
//     "Path Mdule/fs1.txt","utf-8",(error,data)=>{
//         console.log(data);//In buffer if no format

//     }
// )

//Delete a file
// fs.unlink("Path Mdule/fs1.txt",(error)=>{
//     if(error===null){
//         console.log("Deleted");
//     }
// })

//Removing directory
// fs.rmdir("Path mdule",(error)=>{
//     if(error===null){
//         console.log("Deleted");
//     }
// })


//Reading content of director
// const files = fs.readdirSync('./');
// console.log(files);
// Async METHOD-
fs.readdir('./',(error,files)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(files);
    }
})



