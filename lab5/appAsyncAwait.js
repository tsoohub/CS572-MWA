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
    
    const users = fetchUsers(); // Fetch users using Async & Await

    // Use data the came from the async Function.
    users.then(function(response){
        return response.json();
    })
    .then(function(json){
        res.render('index', { users: json });
    })
    .catch((err) => console.error(err));

});

async function fetchUsers() {
    try{
        return await fetch('http://jsonplaceholder.typicode.com/users');
    }catch(error) {
        console.error(error);
    }
}

app.listen(3000);