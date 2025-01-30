const EventEmitter = require ('node:events').EventEmitter;

const events = new EventEmitter();
events.addListener('data-recevied', (data)=>{
console.log(`This is on listen: ${data}`);
});

events.on('ON-data-recevied', (data) =>{
    console.log(`ON-data-recevied: ${data}`);
})