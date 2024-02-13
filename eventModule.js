//Exploring event module
// Event is basically a signal that something has happened.

//EventEmitter
//Uppaercase indicates that this is a class
const EventEmitter = require('events');
const emitter = new EventEmitter();

//Register a listener which will be called on emitting
// emitter.on and emitter.addListener are same
//Order is important 
emitter.on('messageLogged',()=>{
    console.log("Listener-1 called");
});

emitter.on('messageLogged',()=>{
    console.log("Listener-2 called");
});

emitter.emit('messageLogged');//Used to signal that an event has happened