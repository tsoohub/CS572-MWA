const server = require('http').createServer();
const fs = require('fs');

// Download time: 421 ms. Using  readFile
server.on('request', (req, res) => {
    fs.readFile('./Pizigani10MB.jpg', (err, data) => {
        if (err) throw err;
        res.end(data);
    });
});

// Download time: 466 ms. Using ReadStream
server.on('request', (req, res) => {
    const src = fs.createReadStream('./Pizigani10MB.jpg');
   src.pipe(res);
});

server.listen(8080);