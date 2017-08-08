const models = require('../models');

const _c = require('../core');
const _ = require('lodash');

exports.auth = (req, res, next) => {
  let token = _c.auth.getToken(req.headers.authorization, token => {
    if (!token) {
      _c.res.loginRequire(res);
    } else {
      models.session.findOne({ where: {token: token}}).then((result) => {
        if (result) {
          _c.auth.getProfile(token, (username, password) => {
            models.user.findOne({where: {username: username, password: password}}).then(data => {
              if (data) {
                next();
              } else {
                _c.res.loginRequire(res);
              }
            });
          })
        } else {
          _c.res.loginRequire(res);
        }
      });

    }
  });
};
