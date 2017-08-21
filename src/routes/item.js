let express = require('express');
let router = express.Router();
let authen = require('../services/authenticate');
const models = require('../models');
const _c = require('../core');
const htmlencode = require('htmlencode');

/**
@api {post} /api/v1/item/create Create Item
@apiName Create Item
@apiGroup Item
@apiParam {String}  title="test" Mandatory type.
@apiParam {String}  description="description test" Mandatory type.
@apiHeader {String} Authorization ="Basic dGVzdDoxMjM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/item/create
*/
router.post('/create', authen.auth, (req, res) => {
  let text = htmlencode.htmlEncode(req.body.description)
  models.item.create({title: req.body.title, description: text, userId: req.currentUser.id}).then(item => {
    _c.res.send(res, item);
  });
});

/**
@api {post} /api/v1/item/update/:itemId Update Item
@apiName Update Item
@apiGroup Item
@apiParam {Json}  values="{name: test}" Mandatory type.
@apiHeader {String} Authorization ="Basic dGVzdDoxMjM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/item/update/1
*/
router.post('/update/:itemId', authen.auth, (req, res) => {
  models.item.findOne({ where: { id: req.params.itemId }}).then(item => {
    if (item) {
      item.updateAttributes({
        values: req.body.values
      }).then(data => {
        _c.res.send(res, item);
      })
    } else {
      _c.res.send(res, item);
    }
  })
});

/**
@api {post} /api/v1/item/detail/:itemId Item Detail
@apiName Item Detail
@apiGroup Item
@apiHeader {String} Authorization ="Basic dGVzdDoxMjM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/item/detail/1
*/
router.post('/detail/:itemId', authen.auth, (req, res) => {
  req.currentUser.getItems({ where: { id: req.params.itemId }}).then(item => {
    _c.res.send(res, item);
  });
});


module.exports = router;
