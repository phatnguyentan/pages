let express = require('express');
let router = express.Router();
let authen = require('../../services/authenticate');
const models = require('../../models');
const _c = require('../../core');
const cAuthen = require('../../services/c-authenticate');
const htmlencode = require('htmlencode');

router.get('/create', (req, res) => {
  res.render('post/create', { title: 'Post Create'})
});

router.get('/update/:itemId', (req, res) => {
  res.render('post/update', { title: 'Post Update'})
});

router.get('/detail/:itemId', cAuthen.auth, (req, res) => {
  _c.api.call(`/api/v1/item/detail/${req.params.itemId}`, {token: req.userToken, user: req.currentUser}, (r) => {
    res.render('post/detail', { title: 'Post Detail', data: r.data});
  })

});

module.exports = router;
