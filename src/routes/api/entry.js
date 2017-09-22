const _c = require('../../core');

exports.start = function (req, res, next) {
  // console.log({
  //   baseUrl: req.baseUrl,
  //   domain: req.domain,
  //   url: req.url,
  //   body: req.body,
  //   query: req.query,
  //   params: req.params,
  // });
  next();
}
