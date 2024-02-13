//Now to load a module, require function return an object that is the export part of the module
//We should export modules in const, so that it cant be altered.
//There is a command which is "jshint app.js" that signifies the errors.

const log = require('./logger');
log("Learned how to create a module and load a module.")
