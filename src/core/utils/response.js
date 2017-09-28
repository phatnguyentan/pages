const config = require('../../../config/envs/config');
const querystring = require('querystring');

module.exports = {
  send: function(res, data) {
    let body = {status: 'success', data: data}
    if (res.req && res.req.pagination) {
      body.pagination = buildPagination(res.req, data)
    }
    res.json(body)
  },

  sendSuccess: function(res) {
    res.json({status: 'success'})
  },

  sendFail: function(res, message = "Request is fail", callback = null) {
    res.json({status: 'failed', message: message})
  },

  loginRequire: function(res, message = "User should login", callback = null) {
    res.json({status: 'failed', message: message})
  },

  render: function(res, path, data) {
    res.render('home/index', { path: path, data: data})
  }
}

function buildPagination(req, data) {
  // console.log(querystring, req.query);
  let pagination = {}
  pagination.page = req.pagination.page
  pagination.per = req.pagination.per
  pagination.links = {}
  pagination.links.self = config.url + req.baseUrl + req.path + `?${querystring.stringify(req.query)}`

  req.query.page = 1;
  pagination.links.first = config.url + req.baseUrl + req.path + `?${querystring.stringify(req.query)}`
  req.query.page = pagination.page;
  // prev link
  if (pagination.page > 1) {
    req.query.page = parseInt(req.query.page) - 1;
    pagination.links.prev = config.url + req.baseUrl + req.path + `?${querystring.stringify(req.query)}`
    req.query.page = parseInt(req.query.page) + 1;
  } else {
    pagination.links.prev = null
  }
  // next link
  if (pagination.per == data.length) {
    req.query.page = parseInt(req.query.page) + 1;
    pagination.links.next = config.url + req.baseUrl + req.path + `?${querystring.stringify(req.query)}`
    req.query.page = parseInt(req.query.page) - 1;
  } else {
    pagination.links.next = null
  }
  return pagination
}
