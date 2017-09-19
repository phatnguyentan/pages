function Api() {
  this.post = function(url, data, callback) {
    $.ajax({
      type: "POST",
      url: url,
      headers: {
        "Authorization": `Basic ${$.cookie("token")}`
      },
      data: data,
      success: callback,
      dataType: 'json'
    });
  };

  this.get = function(url, data, callback) {
    $.ajax({
      type: "GET",
      url: url,
      headers: {
        "Authorization": `Basic ${$.cookie("token")}`
      },
      success: callback,
      dataType: 'json'
    });
  };

  return this;
}
