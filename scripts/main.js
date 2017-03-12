var words = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];
// create random number
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// use random number as index to words to get a random word
const word = words[getRandomIntInclusive(0, words.length)];

// access dom for word
let wordnode = document.getElementById("word");

// ability to make underscores for each letter of word
function makeUnders(word) {
  let letters = word.split('');
  return letters.map(function(letter) {
    return " _ "; 
  }).join("");
}

// make underscores and put them in the dom 
wordnode.textContent = makeUnders(word);

function showInput(){
  const userInput = document.querySelector('input#guess').value;
  console.log(userInput);
  document.querySelector('p#show').innerText = userInput;
  }
document.querySelector('input#check').onclick = showInput()



