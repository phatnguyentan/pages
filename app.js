let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let userRou = require('./src/routes/user');
let homeRou = require('./src/routes/home');
let errorCtr = require('./src/controllers/error');
let debug = require('debug')('api_ecommerce:server');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://auth-server:Password@localhost:5432/ecommerce');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
//
const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/users', userRou)
app.use('/', homeRou)
// Static Route
app.use(express.static('public'))

app.use(errorCtr.sendError);


// app.use(function (err, req, res, next) {
//   debug(err.stack)
//   res.status(500).send('Something broke!')
// })

module.exports = app;
