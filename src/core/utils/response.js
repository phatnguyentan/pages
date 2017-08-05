module.exports = {
  send: function(res, data, callback = null) {
    res.json({status: 'success', data: data});
    if(callback) {
      callback(data);
    }
  }
}
