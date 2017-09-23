let express = require('express');
let router = express.Router();
let authen = require('../../services/authenticate');
const models = require('../../models');
const _c = require('../../core');

router.get('/create', (req, res) => {
  res.render('post/create', { title: 'Post Create'})
});

router.get('/update/:itemId', (req, res) => {
  res.render('post/update', { title: 'Post Update'})
});

router.get('/detail/:itemId', (req, res) => {
  res.render('post/detail', { title: 'Post Detail'})
});

module.exports = router;
