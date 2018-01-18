var fs = require('fs');
var zlib = require('zlib');
var gzip = zlib.createGzip();

var readable = fs.createReadStream(__dirname + '/history.txt');
var compressed = fs.createWriteStream(__dirname + '/destination.txt.giz');

readable.pipe(gzip).pipe(compressed);