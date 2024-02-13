# Node_Application

1. Exploring app.js
function sayHello(name){
    console.log("Hello"+name);
}
//We cannot call window.sayHello if if it can be defined in two places. Follow modulairty
sayHello("Deepak");


// console.log(window); //Will throw error
// console.log();//Global
// setTimeout();//Global
// clearTimeout();//Global
// setInterval();//Global
// clearInterval();//Global

// window.console.log("deepak");  same as console.log();

//Use of var
var message =" ";

// global.setTimeout(() => {
// }, timeout); Will workk
// console.log(global.message);//Not defined

//Every file in node is considered as a module
console.log(module);


2. Module Wrapper Function -
At runtime a s file is converted into a function

(function(exports,require,module,__fileName,__dirName){//This is known as module wrapper function
    var url = 'http://mylogger.io/log';
    function log(message){
        //Send an http request
        console.log(message);
    }
module.exports=log;
})
This is conversion of module, it always wraps inside a function.