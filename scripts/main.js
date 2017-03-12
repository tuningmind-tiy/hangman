function onLoad() {
  //----------------
    let words = [
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
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let spot = 0;
    let letter = '';
    let wordnode = document.getElementById("word");
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const word = words[getRandomIntInclusive(0, words.length)];

    function makeUnders(word, spot, letter) {
      let letters = word.split('');
      return letters.map(function(currentletter) {
        if (currentletter === letter) {
          return (" " + letter + " ");
        } else {
        return " _ "; 
        }
      }).join("");
    }

    var unders  = makeUnders(word, spot, letter);
    wordnode.textContent = unders;
    document.getElementById("alphabet").textContent = alphabet.join(" ");
  //----------------

  let alphnode = document.querySelector('div#alphabet');
  let anode = document.querySelector('p#a');
  let enode = document.querySelector('p#e');
  let inode = document.querySelector('p#i');
  let onode = document.querySelector('p#o');
  let unode = document.querySelector('p#u');

  // find out if the chosen letter is in word
  function getSpot(word, letter) {
    return word.indexOf(letter);
  }

  // get the letter from the user
  function getA() {
    anode.textContent = replaceUnders(word, getSpot('a'), 'a')
  }
  function getGuess() {
    anode.onclick = getA;
    return letter;
  }
  
  function replaceUnders() {
    document.getElementById("word").textContent = makeUnders(word, spot, letter) 
  }
  wordnode.onclick = replaceUnders;
  alphnode.textContent = alphabet.join(" ");
}
window.onload = onLoad;

