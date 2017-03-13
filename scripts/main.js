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
    let alphnode = document.querySelector('div#alphabet');
    let anode = document.querySelector('p#a');
    let inpt = document.querySelector('input#inpt');
    let btn = document.querySelector('button#btn');
  //----------------
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
  //----------------
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const word = words[getRandomIntInclusive(0, words.length)];
    console.log("The random word is '", word, "'");


    wordnode.textContent = makeUnders(word, spot, letter);
    document.querySelector("div#alphabet").textContent = alphabet.join(" ");
  //----------------
      function getA() {
        anode.textContent = replaceUnders(word, spot, 'a')
      }
      // get the letter from the user
      function getGuess() {
        anode.onclick = getA;
        return letter;
      }
      // find out if the chosen letter is in word; returns index
      // of the letter, or -1
      function spotInWord(word, letter) {
        return word.indexOf(letter);
      }
      function replaceUnders() {
        document.querySelector("div#word").textContent = 
          makeUnders(word, spot, letter) 
      }
      //wordnode.onclick = replaceUnders;
  //----------------
  
  letter = inpt.value;

  function test() {
    console.log("the current guess is '", letter, "'");
  }
  btn.addEventListener('click', function() {
    test();
  } );
}
window.onload = onLoad;

