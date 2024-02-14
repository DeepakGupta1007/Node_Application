const express = require('express');
//Return a function

const app =express();

app.get('/',(req,res)=>{
    res.send('Hello Deepak');
});


//TO read parameters from url
app.get('/api/courses/:id',(req,res)=>{
    res.send(req.params.id);
})

app.get('/api/posts/:y/:m',(req,res)=>{
    res.send(req.params);
})

//Way to read query parameters
app.get('/api/posts/:y',(req,res)=>{
    res.send(req.query);
})
// ---------
app.get('/api/courses',(req,res)=>{
    res.send(["B.Tech","BBA"]);
})

const port = process.env.PORT || 4000;
app.listen(port,(data,error)=>{
    console.log(`Listening on port ${port}`);
})

