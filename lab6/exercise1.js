'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const validator = require('express-validator');

const {Grade} = require('./grade.js');
const grade = new Grade();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(morgan('combined'));

app.get('/grades/', function(req, res) {
    res.send(grade.read());
    res.end();
});

app.post('/grades', function (req, res) {
    if (!req.body) return res.sendStatus(400);

    req.assert('id', 'Id is required').notEmpty().toInt();
    req.assert('name', 'Name is at least 3 characters').isLength({ min: 3 });
    req.assert('course', 'Course is at least 5 characters').isLength({ min: 4 });
    req.assert('grade', 'Grade is required, be between 0 and 100').isLength({ min: 1, max: 3 });
    
    let errors = req.validationErrors();
    if(errors) res.send(errors);
    else {
        grade.add(req.body);
        res.send(grade.read());
    }
    res.end();
});

app.delete('/grades/', function(req, res) {
    req.assert('id', 'Id is required').notEmpty().toInt();

    let errors = req.validationErrors();
    if(errors) res.send(errors);
    else {
        grade.delete(req.body.id);
        res.send(grade.read());
    }
    res.end();
});

app.put('/grades/', function(req, res) {
    req.assert('id', 'Id is required').notEmpty().toInt();
    req.assert('name', 'Name is at least 3 characters').isLength({ min: 3 });
    req.assert('course', 'Course is at least 5 characters').isLength({ min: 4 });
    req.assert('grade', 'Grade is required, be between 0 and 100').isLength({ min: 1, max: 3 });

    let errors = req.validationErrors();
    if(errors) res.send(errors);
    else {
        grade.update(req.body);
        res.send(grade.read());
    }
    res.end();
});

app.listen(3000);
