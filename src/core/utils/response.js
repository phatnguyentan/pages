module.exports = {
  send: function(res, data, callback = null) {
    res.json({status: 'success', data: data});
    if(callback) {
      callback(data);
    }
  },

  sendSuccess: function(res, callback = null) {
    res.json({status: 'success'});
  },

  sendFail: function(res, message = "Request is fail", callback = null) {
    res.json({status: 'fail', message: message});
  },

  loginRequire: function(res, message = "User should login", callback = null) {
    res.json({status: 'fail', message: message});
  }
}
