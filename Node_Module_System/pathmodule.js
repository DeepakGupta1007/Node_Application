const path = require('path');

const pathObject = path.parse(__filename);
console.log(pathObject);
//Output----------------
// {
//   root: 'F:\\',
//   dir: 'F:\\Projects\\Node_Application',
//   base: 'pathmodule.js',
//   ext: '.js',
//   name: 'pathmodule'
// }
//-----------------


console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.basename(__filename));

/*Output----
F:\Projects\Node_Application
.js
pathmodule.js
*/