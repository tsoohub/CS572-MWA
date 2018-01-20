const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.engine('pug', require('pug').__express);
app.set('views', __dirname+'/views');
app.set('view engine', 'pug');
app.set('trust proxy', true);
app.set('view cache', true);
app.set('strict routing', true);
app.set('case sensitive routing', true);

app.enable('view cache');
app.enable('trust proxy');
app.enable('case sensitive routing');

app.get('/users', function (req, res) {
    
    const users = fetch('http://jsonplaceholder.typicode.com/users');

    // Retrieve data using Promises
    users.then(function(response){
        return response.json();
    })
    .then(function(json){
        res.render('index', { users: json });
    })
    .catch((err) => console.error(err));
    
    
});
app.listen(3000);