const express = require('express');
//Return a function

const app =express();

app.get('/',(req,res)=>{
    res.send('Hello Deepak');
});



app.get('/api/courses',(req,res)=>{
    res.send(["B.Tech","BBA"]);
})

const port = process.env.PORT || 4000;
app.listen(port,(data,error)=>{
    console.log(`Listening on port ${port}`);
})