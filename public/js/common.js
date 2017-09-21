function Common() {
  this.getUrlParameter = function(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
  }

  this.getUrlId = function() {
    var url = window.location.pathname;
    return url.substring(url.lastIndexOf('/') + 1);
  }

  this.htmlEncode = function (value){
    //create a in-memory div, set it's inner text(which jQuery automatically encodes)
    //then grab the encoded contents back out.  The div never exists on the page.
    return $('<div/>').text(value).html();
  }

  this.htmlDecode = function (value){
    return $('<div/>').html(value).text();
  }


  return this;
}
