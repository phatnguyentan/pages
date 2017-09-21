const config = require('../../config/envs/config');
const res = require('./utils/response');
const req = require('./utils/request');
const basicAuth = require('./auth/basic');
const debug = require('debug')('pages:debug');


module.exports = {
  res: res,
  req: req,
  auth: basicAuth,
  debug: debug,
  config: config
}
