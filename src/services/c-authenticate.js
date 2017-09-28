const _c = require('../core');
const _ = require('lodash');

exports.auth = (req, res, next) => {
  if (req.cookies && req.cookies.session) {
    let session = JSON.parse(req.cookies.session)
    req.currentUser = session.user;
    req.userToken = session.token;
    next();
  } else {
    res.redirect(`/user/login`);
  }
};
