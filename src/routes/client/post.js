let express = require('express');
let router = express.Router();
let authen = require('../../services/authenticate');
const models = require('../../models');
const _c = require('../../core');

router.get('/create', (req, res) => {
  res.render('post/create', { title: 'Home', message: 'Hello there!' })
});

module.exports = router;
