let express = require('express');
let router = express.Router();
let authen = require('../../services/authenticate');
const models = require('../../models');
const _c = require('../../core');
const htmlencode = require('htmlencode');
const striptags = require('striptags');

/**
@api {get} /api/v1/item/list/:pageId List Item By Page
@apiName List Item
@apiGroup Item
@apiHeader {String} Authorization ="Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/item/list/1?page=1&per=10
*/
router.get('/list/:pageId', authen.auth, (req, res, next) => {
  models.page.findOne({where : {id: req.params.pageId}}).then(page => {
    if (page) {
      page.getItems(_c.req.paginate(req)).then(items => {
        _c.res.send(res, items)
      })
    } else {
      _c.res.sendFail(res, 'page_not_found')
    }
  });
});

/**
@api {get} /api/v1/item/user/:username List Item By User
@apiName List Item
@apiGroup Item
@apiSampleRequest http://localhost:8000/api/v1/item/user/test?page=1&per=10
*/
router.get('/user/:username', (req, res, next) => {
  models.user.findOne({where: {username: req.params.username}}).then(user => {
    if (req.query.category) {
      user.getItems({include: [{model: models.category, where: {name: req.query.category}}], order: [['updatedAt', 'DESC']]}).then(data => {
        _c.res.send(res, data);
      })
    } else {
      user.getItems({order: [['updatedAt', 'DESC']]}).then(data => {
        _c.res.send(res, data);
      })
    }
  });
});

/**
@api {get} /api/v1/item/home List Item Home Page
@apiName List Item Home Page
@apiGroup Item
@apiHeader {String} Authorization ="Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/item/home
*/
router.get('/home', authen.getUser, (req, res) => {
  if (req.currentUser) {
    models.item.findAll(_c.req.paginate(req, {where : {$or: [{userId: req.currentUser.id}, {type: "system"} ]}})).then(items => {
      _c.res.send(res, items)
    })
  } else {
    models.item.findAll(_c.req.paginate(req, {where : {type: "system"}})).then(items => {
      _c.res.send(res, items)
    })
  }
});

/**
@api {post} /api/v1/item/create Create Item
@apiName Create Item
@apiGroup Item
@apiParam {String}  title="test" Mandatory type.
@apiParam {String}  description="description test" Mandatory type.
@apiParam {String}  privacy="public" Mandatory type.
@apiHeader {String} Authorization ="Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/item/create
*/
router.post('/create', authen.auth, (req, res) => {
  // let content = htmlencode.htmlEncode(req.body.content)
  let content = req.body.content
  let des = htmlencode.htmlEncode(striptags(req.body.content).substring(0, 100));
  models.item.create({title: req.body.title,
    description: des,
    title: req.body.title,
    userId: req.currentUser.id,
    thumbnail: req.body.thumbnail,
    content: content
  }).then(item => {
    _c.res.send(res, item);
  });
});

/**
@api {post} /api/v1/item/update/:itemId Update Item
@apiName Update Item
@apiGroup Item
@apiParam {Json}  values="{name: test}" Mandatory type.
@apiHeader {String} Authorization ="Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/item/update/1
*/
router.post('/update/:itemId', authen.auth, (req, res) => {
  models.item.findOne({ where: { id: req.params.itemId }, include: [{model: models.category}]}).then(item => {
    let content = req.body.content;
    let des = htmlencode.htmlEncode(striptags(req.body.content).substring(0, 100));
    if (item) {
      item.updateAttributes({
        title: req.body.title,
        content: content,
        thumbnail: req.body.thumbnail,
        description: des
      }).then(data => {

      });
      if (req.body.categoryId != 0) {
        models.category.findById(req.body.categoryId).then(r => {
          if(item.categories.length == 0 && r) {
            item.addCategory(r).then(r => {
              _c.res.send(res, item);
            });
          } else if (r) {
            item.setCategories(r).then(r => {
              _c.res.send(res, item);
            })
          } else {
            _c.res.send(res, item);
          }
        })
      } else {
        item.setCategories([]).then(r => {
          _c.res.send(res, item);
        })
      }
    } else {
      _c.res.send(res, item);
    }
  })
});

/**
@api {get} /api/v1/item/detail/:itemId Item Detail
@apiName Item Detail
@apiGroup Item
@apiHeader {String} Authorization ="Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/item/detail/1
*/
router.get('/detail/:itemId', (req, res) => {
  models.item.findOne({ where: { id: req.params.itemId }, include: [{model: models.tag}, {model: models.user}]}).then(item => {
    _c.res.send(res, item);
  })
});

/**
@api {post} /api/v1/item/add-page Add to Page
@apiName Add to Page
@apiGroup Item
@apiHeader {String} Authorization ="Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=" Basic Access Authentication token.
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
