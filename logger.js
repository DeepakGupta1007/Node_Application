//Creating a module
var url = 'http://mylogger.io/log';

function log(message){
    //Send an http request
    console.log(message);
}

// module.exports.log = log;

//Way-2 Can also export without naming and use directly in the export section
module.exports=log;
