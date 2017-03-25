window.onload = function () {

  const app_id = '35678f4b'
  const app_key = '236ca3c17167026e0f0068310bbda7f8'
  const base_url = 'https://od-api.oxforddictionaries.com/api/v1'
  const language = 'en'
  const word_id = 'word'
  const url = base_url + '/' + language + '/' + word_id
  
  // Create the XHR object.
  function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
      xhr.overrideMimeType('application/json')
    } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
  }

  // Helper method to parse the title tag from the response.
  // function getTitle(text) {
  //   return text.match('<title>(.*)?</title>')[1];
  // }

  // Make the actual CORS request.
  function makeCorsRequest() {
    // This is a sample server that supports CORS.
    //var url = 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html';
    var url = url

    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
      console.log('CORS not supported');
      return;
    }
  
    // Response handlers.
    xhr.onload = function() {

      console.log("inside xhr.onload function")
      var text = xhr.responseText;
      console.log(text)
      // var title = getTitle(text);
      // console.log('Response from CORS request to ' + url + ': ' + title);
    };

    xhr.onerror = function() {
      console.log('Woops, there was an error making the request.');
    };

    xhr.send();
  }
  makeCorsRequest()

}
