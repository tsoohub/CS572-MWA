// Create a Reactive HTTP Server
// Reading from file in the child process

const Rx = require('@reactivex/rxjs');
const subject = new Rx.Subject();
const { fork } = require('child_process');

function serveFile(e) {

    const request = e.request;
    const response = e.response;
    const url = request.url;

    const file = fork('readFile.js');
    file.send('start');
    file.on('data', filedata => {
        response.end(`File is downloaded: ${filedata}`);
    });
}

subject.subscribe(serveFile);

const http = require('http');
http.createServer((req, res) => {
    subject.next({
        request: req,
        response: res
    });
    
}).listen(3000);