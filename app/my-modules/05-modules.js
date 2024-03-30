const sayHi = require('./02-my-first-module');
const data =  require('./03-my-2nd-module');
const data2 =  require('./04-my-third-module');


const name = data.fname + ' ' + data.lname + ' ' + data2.user.name;
const runModule = sayHi(name);

module.exports = runModule;