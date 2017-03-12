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

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const word = words[getRandomIntInclusive(0, words.length)];

let elem = document.getElementById("word");
let alphabet = document.getElementById("alphabet");

function makeUnders(word, spot, letter ) {
  letters = word.split('');
  return letters.map(function(currentletter) {
    if (currentletter == letter) {
      return (" " + letter + " ");
    } else {
      return " _ "; 
    }
  }).join("");
}

let spot = 0;
let letter = '';
let available = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
elem.textContent = makeUnders(word, spot, '');
let turns = 26;
letter = document.getElementById("yourguess").textContent
console.log("letter: ", letter);
spot = word.indexOf(letter);
console.log("spot: ", spot);
if (available.indexOf(letter) > 0) {available.splice(spot, 1);}
console.log("available: ", available);
elem.textContent = makeUnders(word, spot, letter);
alphabet.textContent = "letters remaining: " + available.join("");


