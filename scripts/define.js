module.exports = define(word) {


window.onload = function define(word) {

//in shell: export API_KEY=secret
//const api_key = process.env.secret
const app_id = 35678f4b
const app_key = '236ca3c17167026e0f0068310bbda7f8'
const url = 'https://od-api.oxforddictionaries.com/api/v1/inflections/en/' + word

  $.ajax({
    url: url + '?app_id=' + app_id + '&app_key=' + app_key
  }).done(function(data) {
      const results = data.results
      const definition = results.lexicalEntries.entries.senses.definitions[0]
      return definition 
    }
}

