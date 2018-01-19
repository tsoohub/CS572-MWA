var fs = require('fs');
var path = require('path');

const readData = (path) => {
    let data = fs.readFile(path.join(__dirname, path), 'utf-8', function (err, data) {
        return data;
    });
    return data;
};

process.on('data', (msg) => {
    const filedata = readData();
    process.send(filedata);
});