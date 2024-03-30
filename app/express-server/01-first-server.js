const express = require('express');
const viewReader = require('./app/my-http-server/view-reader');
const app = express();

async function processRequest(req, res, page){
    const view = await viewReader.readView(page);
    if(view)
    {
        res.status(200);
        res.send(view);
    }
    else{

        const errorView = await viewReader.readView('error.html');
        res.status(500);
        res.send(errorView);
    }
}

app.get('/', async (req, res)=>{
    res.setHeader('content-type','text/html')
    await processRequest(req, res, 'index.html');
});

app.get('/about', async (req, res)=>{
    res.setHeader('content-type','text/html')
    await processRequest(req, res, 'about.html');
});

app.get('/contact', async (req, res)=>{
    res.setHeader('content-type','text/html')
    await processRequest(req, res, 'contact.html');
});

app.all('*', async (req, res) =>{
    res.setHeader('content-type','text/html');
    const errorView = await viewReader.readView('404.html');
    res.status(404).send(errorView);
});

app.listen(8000, ()=>{
    console.log('listening on port: 8000');
})