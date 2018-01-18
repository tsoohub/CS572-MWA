'use strict';

var gunzip = require('gunzip-file');
gunzip('destination.txt.giz', 'unzipped.txt', () => {
    console.log('Unzipped');
});