let express = require('express');
let router = express.Router();
const cAuthen = require('../../services/c-authenticate');
const models = require('../../models');
const _c = require('../../core');
const htmlencode = require('htmlencode');

// let http = require('http');
router.get('/login', (req, res) => {
  res.render('user/login', {title: 'login'})
});

router.get('/:username/:category', (req, res) => {
  _c.api.get(`/api/v1/user/show/${req.params.username}`, {}, (user) => {
    _c.api.get(`/api/v1/category/user/${req.params.username}`, {}, (categories) => {
      if (req.params.category == "latest") {
        _c.api.get(`/api/v1/item/user/${req.params.username}`, {}, (item) => {
          for(let i = 0; i < item.data.length; i++) {
            item.data[i].description = htmlencode.htmlDecode(item.data[i].description);
            item.data[i].content = "";
          }
          res.render('user/profile', { title: 'User Profile', data: item.data, user: user.data, categories: categories.data})
        })
      } else {
        _c.api.get(`/api/v1/item/user/${req.params.username}?category=${req.params.category}`, {}, (item) => {
          for(let i = 0; i < item.data.length; i++) {
            item.data[i].description = htmlencode.htmlDecode(item.data[i].description);
            item.data[i].content = "";
          }
          res.render('user/profile', { title: 'User Profile', data: item.data, user: user.data, categories: categories.data})
        })
      }
    });
  });
});

router.get('/:username', (req, res) => {
  res.redirect(`/user/${req.params.username}/latest`);
});



module.exports = router;
