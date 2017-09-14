const config = require('../../../config/envs/config');
const querystring = require('querystring');

module.exports = {
  send: function(res, data) {
    let body = {status: 'success', data: data}
    if (res.req.pagination) {
      body.pageMetadata = buildPageMetadata(res.req, data)
    }
    res.json(body)
  },

  sendSuccess: function(res) {
    res.json({status: 'success'})
  },

  sendFail: function(res, message = "Request is fail", callback = null) {
    res.json({status: 'fail', message: message})
  },

  loginRequire: function(res, message = "User should login", callback = null) {
    res.json({status: 'fail', message: message})
  },

  render: function(res, path, data) {
    res.render('home/index', { path: path, data: data})
  }
}

function buildPageMetadata(req, data) {
  // console.log(querystring, req.query);
  let pageMetadata = {}
  pageMetadata.page = req.pagination.page
  pageMetadata.per = req.pagination.per
  pageMetadata.links = {}
  pageMetadata.links.self = config.url + req.baseUrl + req.path + `?${querystring.stringify(req.query)}`

  req.query.page = 1;
  pageMetadata.links.first = config.url + req.baseUrl + req.path + `?${querystring.stringify(req.query)}`
  req.query.page = pageMetadata.page;
  // prev link
  if (pageMetadata.page > 1) {
    req.query.page = parseInt(req.query.page) - 1;
    pageMetadata.links.prev = config.url + req.baseUrl + req.path + `?${querystring.stringify(req.query)}`
    req.query.page = parseInt(req.query.page) + 1;
  } else {
    pageMetadata.links.prev = null
  }
  // next link
  if (pageMetadata.per == data.length) {
    req.query.page = parseInt(req.query.page) + 1;
    pageMetadata.links.next = config.url + req.baseUrl + req.path + `?${querystring.stringify(req.query)}`
    req.query.page = parseInt(req.query.page) - 1;
  } else {
    pageMetadata.links.next = null
  }
  return pageMetadata
}
