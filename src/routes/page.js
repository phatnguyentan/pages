let express = require('express');
let router = express.Router();
let authen = require('../services/authenticate');
const models = require('../models');
const _c = require('../core');

/**
@api {get} /api/v1/page/list Request Page List
@apiName Page List
@apiGroup Page
@apiHeader {String} Authorization ="Basic dGVzdDoxMjM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/page/list
*/
router.get('/list', authen.auth, (req, res) => {
  req.currentUser.getPages().then(data => {
    _c.res.send(res, data);
  });
});

/**
@api {post} /api/v1/page/create Create Page
@apiName Create Page
@apiGroup Page
@apiParam {String}  name="My Note" Mandatory type.
@apiParam {String}  type=note Mandatory type.
@apiHeader {String} Authorization ="Basic dGVzdDoxMjM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/page/create
*/
router.post('/create', authen.auth, (req, res) => {
  models.page.create({type: req.body.type, name: req.body.name}).then(page => {
    req.currentUser.addPage(page).then(relation => {
      _c.res.send(res, page);
    });
  });
});

/**
@api {post} /api/v1/page/delete Delete Page
@apiName Delete Page
@apiGroup Page
@apiParam {String}  pageId=1 Mandatory type.
@apiHeader {String} Authorization ="Basic dGVzdDoxMjM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/page/delete
*/
router.post('/delete', authen.auth, (req, res) => {
  models.page.findOne({where: {id: req.body.pageId}}).then(page => {
    req.currentUser.removePage(page).then(relation => {
      _c.res.send(res, page);
    });
  });
});


/**
@api {get} /api/v1/page/detail/:pageId Request Page Detail
@apiName Page Detail
@apiGroup Page
@apiHeader {String} Authorization ="Basic dGVzdDoxMjM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/page/detail/1
*/
router.get('/detail/:pageId', authen.auth, (req, res) => {
  // console.log(req.query, req.params, req.body);
  req.currentUser.getPages({where: {id: req.params.pageId}, include: [{ model: models.item, as: 'items'}]}).then(data => {
    _c.res.send(res, data);
  });
});


module.exports = router;
