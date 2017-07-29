let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let userRou = require('./src/routes/user');
let homeRou = require('./src/routes/home');
let errorCtr = require('./src/controllers/error');
let debug = require('debug')('api_ecommerce:server');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/users', userRou)
app.use('/', homeRou)
// Static Route
app.use(express.static('public'))

app.use(errorCtr.sendError);

module.exports = app;
