const http = require('http')
const url = require('url')
const express = require('express')

const app = express()

app.get('/', (req,res)=> {
    console.log(url.parse(req.url));
    console.log('Hello from server');
    res.send('Hello from server');
})
const server = http.createServer(app);


server.listen(8080, ()=>{
    console.log('Server is listening at port 8080');
})
