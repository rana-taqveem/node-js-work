const fs = require('fs');
const { reject } = require('lodash');
const path = require('path');

const file = path.resolve(__dirname, "content", "log.txt")


const readLog = (filePath) => {
    return new Promise((resolve, reject) =>{
        fs.readFile(filePath, 'utf-8', (err, result) => {
            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        });
    })

}

readLog(file).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
})
