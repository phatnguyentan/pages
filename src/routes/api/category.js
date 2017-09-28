let express = require('express');
let router = express.Router();
let authen = require('../../services/authenticate');
const models = require('../../models');
const _c = require('../../core');

/**
@api {post} /api/v1/category/user-create Create Category
@apiName Create Category
@apiGroup Category
@apiParam {String}  name="portfolio" Mandatory type.
@apiHeader {String} Authorization ="Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/category/user-create
*/
router.post('/user-create', authen.auth, (req, res, next) => {
  models.category.create({name: req.body.name}).then(category => {
    req.currentUser.addCategory(category).then(relation => {
      req.currentUser.getCategories().then(data => {
        _c.res.send(res, data);
      })
    })
  });
});

/**
@api {get} /api/v1/category/user/:username List Category
@apiName List Category
@apiGroup Category
@apiHeader {String} Authorization ="Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/category/user/:username
*/
router.get('/user/:username', (req, res, next) => {
  models.user.findOne({where: {username: req.params.username}}).then(user => {
    user.getCategories().then(data => {
      _c.res.send(res, data);
    })
  })
});

/**
@api {post} /api/v1/category/user-delete Delete Category
@apiName Delete Category
@apiGroup Category
@apiParam {String}  categoryId=1 Mandatory type.
@apiHeader {String} Authorization ="Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/category/user-delete
*/
router.post('/user-delete', authen.auth, (req, res) => {
  models.category.findOne({where: {id: req.body.categoryId}}).then(category => {
    req.currentUser.removeCategory(category).then(relation => {
      req.currentUser.getCategories().then(categories => {
        _c.res.send(res, categories);
      });
    });
  });
});


module.exports = router;
