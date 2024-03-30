const fs = require('fs');
const { delay } = require('lodash');
const path = require('path');

const file = path.resolve(__dirname, "content", "log.txt")

readLog(1);
readLog(2);
readLog(3);
readLog(4);

process.on('exit', () => {
    console.log('Node.js process exit');
});

function readLog(id){
    fs.readFile(file, 'utf-8', (err, result) => {

        if(err){
            console.log("Error reading file");
        }
    
        console.log(`File ${id}: ${result}`);
    
    });
}


console.log("Start");

setTimeout(()=>{
    console.log('setTimeout callback')
}, 10);

readLog(5);
console.log("End");

console.log("Start-2");

setImmediate(()=>{
    console.log('setImmediate callback')
})

readLog(6);


console.log("End-2");

readLog(1);
readLog(2);
readLog(3);
readLog(4);

setImmediate(()=>{
    console.log('setImmediate callback 2')
})
