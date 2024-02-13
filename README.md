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