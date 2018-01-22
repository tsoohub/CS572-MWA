const express = require('express');
const app = express();
const crypto = require('crypto');

var MongoClient = require('mongodb').MongoClient;

let decrypted = "";

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err) throw err;
    var db = client.db('january');

    db.collection('homework7').findOne({}, function(err, doc) {
        if(err) return err;

        const message = doc.message;
        const decipher = crypto.createDecipher('aes256', 'asaadsaad');
        decrypted = decipher.update(message, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
    });
});

app.get('/secret', function(req, res) {
    res.end(decrypted);
    res.end();
});

app.listen(3000);