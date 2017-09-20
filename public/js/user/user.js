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

  this.logout = function(callback) {
    $.removeCookie("session");
    return true;
  };

  this.saveCookie = function(data) {
    $.cookie("session", JSON.stringify(data));
  };

  return this;
}
