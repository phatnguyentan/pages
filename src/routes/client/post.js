let express = require('express');
let router = express.Router();
let authen = require('../../services/authenticate');
const models = require('../../models');
const _c = require('../../core');
const cAuthen = require('../../services/c-authenticate');
const htmlencode = require('htmlencode');

router.get('/create', cAuthen.auth, (req, res) => {
  res.render('post/create', { title: 'Post Create'});
});

router.get('/update/:itemId', cAuthen.auth, (req, res) => {
  res.render('post/update', { title: 'Post Update', token: req.userToken});
});

router.get('/detail/:itemId', (req, res) => {
  _c.api.call(`/api/v1/item/detail/${req.params.itemId}`, {}, (r) => {
    res.render('post/detail', { title: 'Post Detail', data: r.data});
  })
});

module.exports = router;
