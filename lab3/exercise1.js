const dns = require('dns');

const mum = dns.resolve4('www.mum.edu', function (err, addresses) {
    console.log(addresses);
});
