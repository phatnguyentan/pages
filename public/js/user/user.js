function User() {

  this.isLogin = function() {
    if (!$.cookie("session")) {
      return false;
    }
    return true;
  };

  this.getInfo = function() {
    return JSON.parse($.cookie("session"));
  };

  this.getToken = function() {
    var session = $.cookie("session");
    if(session) {
      return JSON.parse($.cookie("session")).token;
    }
    return {};
  };

  this.logout = function(callback) {
    $.removeCookie("session");
    return true;
  };

  this.saveCookie = function(data) {
    $.cookie("session", JSON.stringify(data));
  };

  return this;
}
