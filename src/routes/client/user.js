let express = require('express');
let router = express.Router();
let cAuthen = require('../../services/c-authenticate');
const models = require('../../models');
const _c = require('../../core');
const htmlencode = require('htmlencode');

// let http = require('http');

router.get('/:username', cAuthen.auth, (req, res) => {
  _c.api.call(`/api/v1/item/user-list/${req.currentUser.id}`, {token: req.userToken, user: req.currentUser}, (r) => {
    for(let i = 0; i < r.data.length; i++) {
      r.data[i].description = htmlencode.htmlDecode(r.data[i].description);
    }
    res.render('user/profile', { title: 'User Profile', data: r.data, user: req.currentUser})
  })
});

module.exports = router;
