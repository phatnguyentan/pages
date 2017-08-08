const _ = require('lodash');

module.exports = {
  getProfile: function(token, callback) {
    let data = _.split(new Buffer(token, 'base64').toString('ascii'), ':', 2);
    callback(data[0], data[1])
  },
  
  getToken: function(auth, callback) {
    callback(_.replace(auth, 'Basic ', ''))
  },

  generateToken: function(username, password, callback) {
    callback(new Buffer(username + ":" + password).toString('base64'))
  }
}
