const os = require('os');
const Rx = require('@reactivex/rxjs');

function checkSystem(observer) {
    const cores = os.cpus().length;
    const totalmem = os.totalmem();

    console.log('Checking your system...');
    observer.next(cores, totalmem);
}

const observer = {
    next: function (cores, totalmem) {
        if (totalmem >= 4000000000 && cores >= 2) {
            console.log('System is checked successfully.');
        }
        if (totalmem < 4000000000) {
            console.log('This app needs at least 4GB of RAM');
        }
        if (cores < 2) {
            console.log('Processor is not supported');
        }
    },
    error: function (e) { },
    complete: function () { }
};
checkSystem(observer);
