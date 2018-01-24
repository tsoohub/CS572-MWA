var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);


const MongoClient = require('mongodb').MongoClient;
let db = null;

MongoClient.connect('mongodb://127.0.0.1:27017', (err, client) => {
    if(err) throw err;
    db = client.db('january');
});

app.post('/location', function(req, res) {
  let doc = req.body;
  db.collection('location').insert(doc, function(err, docInserted) {
    if(err) return err;
    doc = docInserted;
  });
  db.collection('location').createIndex({'location': '2d'});
  res.send(doc);
  res.end();
});

app.delete('/location', function(req, res) {
  let doc = req.body;
  db.collection('location').remove(doc, function(err, docRemoved) {
    if(err) return err;
    doc = docRemoved;
  });
  res.send(doc);
  res.end();
});

app.put('/location', function(req, res) {
  let doc = req.body;
  const query = {'_id': doc._id};

  db.collection('location').findAndModify(query, doc, function(err, updatedDoc) {
   if(err) return err;
   console.dir(updatedDoc);
   doc = updatedDoc;
  });

  res.send(doc);
  res.end();
});

app.get('/location', function(req, res) {
  let doc = '';
  db.collection('location').find({}, function(err, readDoc) {
   if(err) return err;
   doc = JSON.stringify(readDoc);
  });

  res.send(doc);
  res.end();
});


app.post('/nearest', function(req, res) {
  let doc = '';
  const long = parseInt(req.body.longtitude, 10);
  const lat = parseInt(req.body.latitude, 10);

  db.collection('location').find(
    {location:
      {$near: {$geometry:
        { type: "Point", coordinates: [long, lat] }, $maxDistance: 1500}}
    }
  ).limit(3).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    doc = JSON.stringify(result);
  });

  res.send(doc);
  res.end();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000);
