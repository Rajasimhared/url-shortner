function getrandom() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

function geturl() {
  let inputURL = document.querySelector("#urlinput").value;
  const validateURL = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  if (validateURL.test(inputURL)) {
    return inputURL;
  } else {
    newurl = "http://" + inputURL;
    return newurl;
  }
}

function genhash() {
  if (window.location.hash == "") {
    window.location.hash = getrandom();
  }
}

function shorturl() {
  var longurl = geturl();
  genhash();
  // send_request(longurl);
}
