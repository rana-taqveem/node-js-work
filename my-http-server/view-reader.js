const fs = require('fs').promises;
const path = require('path');


function readViewSync(view) {
    const viewPath = path.resolve(__dirname, 'views', view);
    return fs.readFileSync(viewPath, 'utf-8');
}

async function readView(view) {

    var data;
    try
    { 
        const viewPath = path.resolve(__dirname, 'views', view);
         data = await fs.readFile(viewPath, 'utf-8');
    }
    catch(error){
        console.log(error);
    }

    return data;
}



module.exports = { readView, readViewSync }