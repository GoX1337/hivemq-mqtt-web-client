const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const port = process.argv.length >= 3 ? process.argv[2] : 8088;

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

server.listen(port, () => {
    console.log('Node server listening on port ' + port);
});