const express = require('express');
//Return a function

const app =express();

app.get('/',(req,res)=>{
    res.send('Hello Deepak');
});

app.get('/api/courses',(req,res)=>{
    res.send(["B.Tech","BBA"]);
})
app.listen(4000,(data,error)=>{
    console.log("Listening on port 4000");
})