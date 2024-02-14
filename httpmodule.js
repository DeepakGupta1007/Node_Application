
const { count } = require('console');
const  http =require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url==='/api/username'){
        res.write('Deepak Gupta');
        res.end();
    }
})


//This http module is not used now. We use express which is bbuild on top of http module.

server.listen(3000,()=>{
    console.log("Listening on 3000");
});