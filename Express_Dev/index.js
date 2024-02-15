const express = require('express');
//Return a function
const app =express();

app.use(express.json());

const courses =[
    {id:1,name:'A'},
    {id:2,name:'B'},
    {id:3,name:'C'}
]

app.get('/',(req,res)=>{
    res.send('Hello Deepak');
});

//TO read parameters from url
app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c=> c.id=== parseInt(req.params.id));
    if(!course){
        res.status(404).send("Id not found");
    }
    else{
    res.send(course);
    }
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
    res.send(courses);
})


app.post('/api/courses',(req,res)=>{
    const course = {
        id: courses.length+1,
        name:req.body.name,
    };
    courses.push(course);
    res.send(courses);
});


const port = process.env.PORT || 4000;
app.listen(port,(data,error)=>{
    console.log(`Listening on port ${port}`);
})

