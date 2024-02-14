const EventEmitter = require("events");

class EventClass extends EventEmitter{
    log = (message) =>{
        console.log(message);

        //Raise an event
        this.emit("messageLogged",{id:1,url:"https://"});
    }
}

module.exports = EventClass;