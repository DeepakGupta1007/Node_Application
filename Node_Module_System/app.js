const Logger = require('./eventemitter');
const logger = new Logger();
//Register a listener
logger.on('messageLogged',(arg)=>{
    const {id,url}= arg;
    console.log(`Listener called with id: ${id} and url: ${url}`)
});

logger.log("message");