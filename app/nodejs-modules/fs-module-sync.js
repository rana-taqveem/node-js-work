const {readFileSync, writeFileSync} = require('fs');
const path = require('path');


const logFile = path.resolve(__dirname, 'content', 'log.txt');

const content = readFileSync(logFile, 'utf-8');

console.log(content);


