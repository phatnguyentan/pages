let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

// API Route
let userRou = require('./src/routes/api/user');
let pageRou = require('./src/routes/api/page');
let itemRou = require('./src/routes/api/item');
let tagRou = require('./src/routes/api/tag');
let itemLinkRou = require('./src/routes/api/item-link');
let fileRou = require('./src/routes/api/file');
let entryRou = require('./src/routes/api/entry');
// Client Route
let homeRou = require('./src/routes/client/home');
let postRou = require('./src/routes/client/post');

let error = require('./src/services/error');
const _c = require('./src/core');
let cors = require('cors');

let app = express();

app.use(cors())
app.use(cookieParser())
app.use('/api/v1/file', fileRou)
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(entryRou.start)

// API Route
app.use('/api/v1/user', userRou)
app.use('/api/v1/page', pageRou)
app.use('/api/v1/item', itemRou)
app.use('/api/v1/tag', tagRou)
app.use('/api/v1/item-link', itemLinkRou)

app.use('/api/docs', express.static('docs/apidoc'))
// Client Route
app.use('', homeRou)
app.use('/post', postRou)

// Static Route
app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));
app.locals.basedir = app.get('views');

module.exports = app;
