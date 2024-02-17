const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const config=require('config');
const morgan =require('morgan');
const helmet = require('helmet');
const express = require('express');
const Joi= require('joi');
const logger = require('./middleware/logger');
const authenticating = require('./middleware/authenticator');
const courses =require('./routes/courses')
const home =require('./routes/home')
//Return a function
const app =express();

app.set('view engine','pug');
app.set('views','./Views')//To put all your views or all your template imside a folder  //Defult view

console.log(`Node Env:${process.env.NODE_ENV}`) //undefined
console.log(`App:${app.get('env')}`);

app.use(express.json());//Populate req.body
app.use(express.urlencoded({extended:true}));
//This is used to serve the static content of the file. Test readme.txt in public folder.As localhost/readme.txt
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses',courses);
app.use('/',home);

//Configuration
console.log('Application Name: '+config.get('name'));
console.log('Mail Server :'+config.get('mail.host'));
console.log('Mail Password: '+ config.get('mail.password'));

if(app.get('env')==='development'){
//Command to change the environment- >set NODE_ENV=production
    app.use(morgan('tiny'));
    startupDebugger('Morgan enabled');
}
app.use(logger);
app.use(authenticating);

const port = process.env.PORT || 4000;
app.listen(port,(data,error)=>{
    console.log(`Listening on port ${port}`);
})

app.get('/api/posts/:y/:m',(req,res)=>{
    res.send(req.params);
    dbDebugger('DB Logger');
})

//Way to read query parameters
app.get('/api/posts/:y',(req,res)=>{
    res.send(req.query);
})
// ---------


//Create a project Vidly ,create an api /api/genres to add, update and get the list of genres.