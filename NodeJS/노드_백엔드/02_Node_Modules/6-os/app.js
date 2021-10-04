const os = require('os');

console.log(os.EOL === '\n');  // false
console.log(os.EOL === '\r\n');  // true