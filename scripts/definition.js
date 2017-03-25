window.onload = function () {

  const app_id = '35678f4b'
  const app_key = '236ca3c17167026e0f0068310bbda7f8'
  const base_url = 'https://od-api.oxforddictionaries.com/api/v1'
  const language = 'en'
  const word_id = 'word'
  const url = base_url// + '/' + language + '/' + word_id + '/definitions'
  
  // Create the XHR object.
  function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
      xhr.overrideMimeType('application/json')
      xhr.setRequestHeader('authentication', app_id)
      xhr.setRequestHeader('app_id', app_id);
      xhr.setRequestHeader('app_key', app_key);
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

  // Make the actual CORS request.
  function makeCorsRequest() {
    var url = url

    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
      console.log('CORS not supported');
      return;
    }
  
    // Response handlers.
    xhr.onload = function() {

      var text = xhr.responseText;
    };

    xhr.onerror = function() {
      console.log('Woops, there was an error making the request.');
    };

    xhr.send(null);
    console.log("xhr inside makeCorsRequest: ", xhr)
  }
      console.log("url: ", url)
  var response = makeCorsRequest()
  console.log("response: ", response)

}
