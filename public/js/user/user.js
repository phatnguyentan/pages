function User() {

  this.isLogin = function() {
    if (!$.cookie("session")) {
      return false;
    }
    return true;
  };

  this.getInfo = function() {
    var session = $.cookie("session");
    if(session) {
      return JSON.parse($.cookie("session"));
    }
    return {};
  };

  this.getToken = function() {
    var session = $.cookie("session");
    if(session) {
      return JSON.parse($.cookie("session")).token;
    }
    return {};
  };

  this.logout = function(callback) {
    $.removeCookie("session", { path: '/' });
    return true;
  };

  this.saveCookie = function(data) {
    $.cookie("session", JSON.stringify(data), { path: '/' });
  };

  this.requireLogin = function(callback) {
    if(this.isLogin()) {
      callback();
    }
    $('#login-modal').modal('show');
  };

  return this;
}
