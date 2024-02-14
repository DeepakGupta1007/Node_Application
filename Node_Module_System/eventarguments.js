//Exploring event arguments after covering basics of event module
const EventEmitter = require('events');
const log = require('../logger');
const emitter = new EventEmitter();

emitter.on('messageLogged',(arg)=>{
    const {id,url}= arg;
    log(`Listener called with id: ${id} and url: ${url}`)
});


emitter.emit('messageLogged',{id: 1,url:"https://google.com"});


// Task - log a message on event