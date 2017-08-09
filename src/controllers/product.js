const models = require('../models');

const _c = require('../core');
/**
@api {get} /api/v1/product/list Request Product List
@apiName Product List
@apiGroup Product
@apiHeader {String} Authorization ="Basic dGVzdDoxMjM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/product/list
*/
exports.list = (req, res) => {
  models.user.findOne({ where: {id: req.current_user.id}, include: [{model: models.product}]}).then(data => {
    _c.res.send(res, data);
  });
};
