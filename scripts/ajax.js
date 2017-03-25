window.onload = function stuff() {

const url = `http://007api.co/api/gadgets/`

const addButtons = function (sometext) {
  const gadgetname = $("<button></button>").text(sometext)
  $("#buttons").append(gadgetname)
}
const addDescriptions = function (sometext) {
  const description = $("<div></div>").text(sometext)
  $("#description").append(description)
}

  $.ajax({
    url: url
  }).done(function(data) {
      const results = data.results
      const resultsLength = results.length;
      const gadgets = [];

      for (let i = 0; i < resultsLength; i++) {
        gadgets.push(results[i])
      }
      
      for (let i = 0; i < gadgets.length; i++) {
        const p = document.createElement('p')
        addButtons(gadgets[i].name)
        addDescriptions(gadgets[i].description) 
      }
      // $("button").addEventListener("click", function () {
      //   $("#description").text(gadgets[i].description)
      // }
    })

  }

