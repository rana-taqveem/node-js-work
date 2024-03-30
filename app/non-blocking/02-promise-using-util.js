const fs = require('fs');
const util = require('util');
const path = require('path');

const file = path.resolve(__dirname, "content", "log.txt")

const readFilePromise = util.promisify(fs.readFile);


readFilePromise(file).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
})
