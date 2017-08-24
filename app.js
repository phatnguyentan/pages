let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let userRou = require('./src/routes/user');
let pageRou = require('./src/routes/page');
let itemRou = require('./src/routes/item');
let tagRou = require('./src/routes/tag');
let itemLinkRou = require('./src/routes/item-link');

let error = require('./src/services/error');
const _c = require('./src/core');
let debug = require('debug')('all:server');
const session = require('express-session');
let cors = require('cors');

let app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(session({
  secret: 'pages',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.use('/api/v1/user', userRou)
app.use('/api/v1/page', pageRou)
app.use('/api/v1/item', itemRou)
app.use('/api/v1/tag', tagRou)
app.use('/api/v1/item-link', itemLinkRou)

// Static Route
app.use(express.static('public'))
app.use('/api/docs', express.static('docs/apidoc'))
// app.use(express.static('src/doc'))

// app.use(error.sendError);

module.exports = app;
