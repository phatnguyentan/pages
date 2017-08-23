let express = require('express');
let router = express.Router();
let authen = require('../services/authenticate');
const models = require('../models');
const _c = require('../core');
const htmlencode = require('htmlencode');


/**
@api {get} /api/v1/item/list/:pageId List Item By Page
@apiName List Item
@apiGroup Item
@apiHeader {String} Authorization ="Basic dGVzdDoxMjM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/item/list/1
*/
router.get('/list/:pageId', authen.auth, (req, res) => {
  models.page.findOne({where : {id: req.params.pageId}}).then(page => {
    if (page) {
      page.getItems().then(items => {
        _c.res.send(res, items);
      })
    } else {
      _c.res.sendFail(res, 'page_not_found')
    }

  });
});

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
    let text = htmlencode.htmlEncode(req.body.description)
    if (item) {
      item.updateAttributes({
        title: req.body.title,
        description: text
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
  req.currentUser.getItems({ where: { id: req.params.itemId }, include: [{model: models.tag}]}).then(item => {
    _c.res.send(res, item);
  });
});

/**
@api {post} /api/v1/item/add-page Add to Page
@apiName Add to Page
@apiGroup Item
@apiHeader {String} Authorization ="Basic dGVzdDoxMjM=" Basic Access Authentication token.
@apiParam {String}  pageId=1 Mandatory type.
@apiParam {String}  itemId=1 Mandatory type.
@apiSampleRequest http://localhost:8000/api/v1/item/add-page
*/
router.post('/add-page', authen.auth, (req, res) => {
  models.page.findOne({ where: { id: req.body.pageId }}).then(page => {
    models.item.findOne({ where: { id: req.body.itemId }}).then(item => {
      if (item) {
        page.addItem(item).then(rel => {
          _c.res.send(res, rel);
        })
      } else {
        _c.res.sendFail(res, 'record_not_found');
      }
    });
  });
});

module.exports = router;