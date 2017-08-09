let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let userRou = require('./src/routes/user');
let productRou = require('./src/routes/product');
let errorCtr = require('./src/controllers/error');
const _c = require('./src/core');
let debug = require('debug')('all:server');
const session = require('express-session');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(session({
  secret: 'ecommerce',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use('/api/v1/user', userRou)
app.use('/api/v1/product', productRou)
// Static Route
app.use(express.static('public'))
app.use('/api/docs', express.static('docs/apidoc'))
// app.use(express.static('src/doc'))

// app.use(errorCtr.sendError);

module.exports = app;
