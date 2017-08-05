module.exports = {
  send: function(data, res, callback = null) {
    res.json({status: 'success', data: data});
    if(callback) {
      callback(data);
    }
  }
}
