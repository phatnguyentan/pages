let express = require('express');
let router = express.Router();
let authen = require('../../services/authenticate');
const models = require('../../models');
const _c = require('../../core');
const cAuthen = require('../../services/c-authenticate');
const htmlencode = require('htmlencode');

router.get('/create', cAuthen.auth, (req, res) => {
  _c.api.get(`/api/v1/category/user/${req.currentUser.username}`, {}, (categories) => {
    res.render('post/update', { title: 'Post Create', token: req.userToken, categories: categories.data});
  });
});

router.get('/update/:itemId', cAuthen.auth, (req, res) => {
  _c.api.get(`/api/v1/category/user/${req.currentUser.username}`, {}, (categories) => {
    res.render('post/update', { title: 'Post Update', token: req.userToken, categories: categories.data});
  });
});

router.get('/detail/:itemId', (req, res) => {
  _c.api.get(`/api/v1/item/detail/${req.params.itemId}`, {}, (r) => {
    res.render('post/detail', { title: 'Post Detail', data: r.data});
  })
});

module.exports = router;
