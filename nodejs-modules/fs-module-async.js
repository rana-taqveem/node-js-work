const { readfile, writeFile } = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'content', 'log.txt');
readfile(filePath, 'utf-8', (err, result) => {

    if(err){
        console.log(err);
        return;
    }

    console.log(result);

})