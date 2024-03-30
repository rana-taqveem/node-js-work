const http = require('http');
const viewReader = require('./view-reader');

const server = http.createServer(async (req, res)=> {

    res.setHeader('content-type','text/html')
    if(req.url === '/'){

        processRequest(req, res, 'index.html');
    }
    else if(req.url === '/about'){
        processRequest(req, res, 'about.html');
    }
    else if(req.url === '/contact'){
        processRequest(req, res, 'contact.html');
    }
    else
    {
        const errorView = await viewReader.readView('404.html');
        res.write(errorView);
        res.statusCode = 404;
        res.end();
    }
});

function startServer(serverPort)
{    
    server.listen(serverPort, ()=>{
        console.log('Server is listening on post', serverPort);
    })
}


async function processRequest(req, res, page){
    const view = await viewReader.readView(page);
    if(view)
    {
        res.write(view);
        res.end();
    }
    else{

        const errorView = await viewReader.readView('error.html');
        res.write(errorView);
        res.statusCode = 500;
        res.end();
    }
}

module.exports = { startServer }
