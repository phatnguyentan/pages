const config = require('../../config/envs/config');
const res = require('./utils/response');
const req = require('./utils/request');
const basicAuth = require('./auth/basic');


module.exports = {
  res: res,
  req: req,
  auth: basicAuth,
  config: config
}
