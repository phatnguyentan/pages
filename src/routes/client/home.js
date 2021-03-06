let express = require('express');
let router = express.Router();
let authen = require('../../services/authenticate');
const models = require('../../models');
const _c = require('../../core');

router.get('/', (req, res) => {
  res.render('home/index', { title: 'Home', message: 'Hello there!' })
});

module.exports = router;
