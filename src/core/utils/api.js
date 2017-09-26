const http = require('http');
const config = require('../../../config/envs/config');
const { StringDecoder } = require('string_decoder');

module.exports = {
  call: function(url, data, callback) {
    var options = {
      host: config.api.host,
      path: url,
      port: config.api.port,
      data: data
    };

    if(data.user) {
      options.auth = `${data.user.username}:${data.user.password}`
    }

    let req = http.get(options, function(res) {
      let decoder = new StringDecoder('utf8');
      let bodyChunks = [];
      res.on('data', function(chunk) {
        bodyChunks.push(chunk);
      }).on('end', function() {
        callback(JSON.parse(decoder.write(Buffer.concat(bodyChunks))));
      })
    });

    req.on('error', function(e) {
      callback({error: e});
    });
  }
}
