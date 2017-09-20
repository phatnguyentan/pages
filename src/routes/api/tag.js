let express = require('express');
let router = express.Router();
let authen = require('../../services/authenticate');
const models = require('../../models');
const _c = require('../../core');

/**
@api {post} /api/v1/tag/create Create Tag
@apiName Create Tag
@apiGroup Tag
@apiParam {String}  itemId=1 Mandatory type.
@apiParam {String}  name=working Mandatory type.
@apiHeader {String} Authorization ="Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/tag/create
*/
router.post('/create', authen.auth, (req, res) => {
  models.item.findOne({where: {id: req.body.itemId}}).then(item => {
    if(item) {
      models.tag.findOrCreate({where: {name: req.body.name}}).spread((tag, created) => {
        item.addTag(tag).then(relation => {
          req.currentUser.addTag(tag).then(relation => {
            _c.res.send(res, tag);
          });
        });
      });
    } else {
      _c.res.sendFail(res, 'Item is not exist');
    }
  });
});

module.exports = router;
