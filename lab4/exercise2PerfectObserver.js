const Rx = require('@reactivex/rxjs');
const os = require('os');

var myObservable = Rx.Observable.create(observer => {
    observer.next(() => {
        
        const cores = os.cpus().length;
        const totalmem = os.totalmem();
        if (totalmem >= 4000000000 && cores >= 2) {
            console.log('System is checked successfully.');
        }
        if (totalmem < 4000000000) {
            console.log('This app needs at least 4GB of RAM');
        }
        if (cores < 2) {
            console.log('Processor is not supported');
        }
    });
});

console.log('Checking your system...');
myObservable.subscribe(value => value());