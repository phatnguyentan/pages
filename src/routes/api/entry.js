const _c = require('../../core');

exports.start = function (req, res, next) {
  _c.debug({
    baseUrl: req.baseUrl,
    domain: req.domain,
    url: req.url,
    body: req.body,
    query: req.query,
    params: req.params,
  });
  // _c.debug(Object.keys(req));
  next();
}
