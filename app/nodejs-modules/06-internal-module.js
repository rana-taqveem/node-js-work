const os = require('os');
const fs = require('node:fs');
const path = require('path')

console.log(path.sep);
const abs = path.resolve(__dirname, 'modules', '05-modules.js')
console.log(abs);
// fs.writeFile('log.txt', 'My first file', (err)=> {
//     console.log(err);
// });

// console.log(os.userInfo());
// console.log(os.uptime());