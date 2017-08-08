const res = require('./utils/response');
const req = require('./utils/request');
const basicAuth = require('./auth/basic');
const debug = require('debug')('all:server');
module.exports = {
  res: res,
  req: req,
  auth: basicAuth
}
