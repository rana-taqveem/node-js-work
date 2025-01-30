const fs = require('fs');
const { delay } = require('lodash');
const path = require('path');
const crypto = require('crypto')








setTimeout(()=> {console.log('Timer expired - 1') }, 0)
setImmediate(() => { console.log('Hello from set Immediate -1 ')})
console.log('Hello form top level code - 1')


process.env.UV_THREADPOOL_SIZE = 4
const file = path.resolve(__dirname, "app", "content", "log.txt")

readLog(1);
readLog(2);

process.on('exit', () => {
    console.log('Node.js process exit');
});


start = Date.now()
crypto.pbkdf2('Password1', 'Salt123', 1000000, 64, 'sha512', ()=>{
    console.log(`${Date.now() - start}`, 'Password1 done')
})

crypto.pbkdf2('Password2', 'Salt123', 1000000, 64, 'sha512', ()=>{
    console.log(`${Date.now() - start}`, 'Password2 done')
})


crypto.pbkdf2('Password1', 'Salt123', 1000000, 64, 'sha512', ()=>{
    console.log(`${Date.now() - start}`, 'Password3 done')
})

crypto.pbkdf2('Password1', 'Salt123', 1000000, 64, 'sha512', ()=>{
    console.log(`${Date.now() - start}`, 'Password4 done')
})

function readLog(id){
    fs.readFile(file, 'utf-8', (err, result) => {

        if(err){
            console.log("Error reading file");
        }
    
        console.log(`FS Polling finished: Read File ${id}: ${result}`);
        setTimeout(()=> {
            console.log('Hello from timer - 2')
        })

        
setImmediate(() => { console.log('Hello from set Immediate - 2')})
    
    });
}

console.log('Hello form top level code - 2')
