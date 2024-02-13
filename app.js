//Now to load a module, require function return an object that is the export part of the module

const logger = require('./logger');
logger.log("Learned how to create a module and load a module.")
console.log(logger);
