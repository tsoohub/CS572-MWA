'use strict';
const EventEmitter = require('events');


class Clock extends EventEmitter {

    constructor() {
        super();
    }

    emitTick() {
        let own = this;
        setInterval(function () {
            own.emit('tick');
        }, 1000);
    }
}

var clock = new Clock();
clock.on('tick', function () {
    console.log('Woohoo');
});

clock.emitTick();