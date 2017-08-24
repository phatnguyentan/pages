let express = require('express');
let router = express.Router();
let authen = require('../services/authenticate');
const models = require('../models');
const _c = require('../core');
const htmlencode = require('htmlencode');


/**
@api {post} /api/v1/item-link/create/:itemId Create Item Link
@apiName Create Item Link
@apiGroup Item Link
@apiHeader {String} Authorization ="Basic dGVzdDoxMjM=" Basic Access Authentication token.
@apiParam {String}  link="https://nodejs.org/api/documentation.html" Mandatory type.
@apiSampleRequest http://localhost:8000/api/v1/item-link/create/1
*/
router.post('/create/:itemId', authen.auth, (req, res) => {
  models.item.findOne({where : {id: req.params.itemId}}).then(item => {
    if (item) {
      models.item_link.create({link: req.body.link, itemId: item.id}).then(link => {
        _c.res.send(res, link)
      })
    } else {
      _c.res.sendFail(res, 'item_not_found')
    }
  });
});

/**
@api {post} /api/v1/item-link/delete Delete Item Link
@apiName Delete Item Link
@apiGroup Item Link
@apiHeader {String} Authorization ="Basic dGVzdDoxMjM=" Basic Access Authentication token.
@apiParam {String}  linkId=1 Mandatory type.
@apiSampleRequest http://localhost:8000/api/v1/item-link/delete
*/
router.post('/delete', authen.auth, (req, res) => {
  models.item_link.findOne({where : {id: req.body.linkId}}).then(link => {
    if (link) {
      link.destroy().then(link => {
        _c.res.sendSuccess(res)
      })
    } else {
      _c.res.sendFail(res, 'link_not_found')
    }
  });
});

module.exports = router;
