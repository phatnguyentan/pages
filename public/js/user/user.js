function User() {

  this.verifyLogin = function(callback) {
    if (!$.cookie("user")) {
      callback({login: false})
      return;
    }
    Api().get('/api/v1/user/show', {}, function(event) {
      if (event.status == "success") {
        callback({login: true});
      } else {
        callback({login: false});
      }
    })
  };

  return this;
}
