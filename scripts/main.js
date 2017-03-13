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
    let letter = '';
    let unders = '';
    let wordnode = document.querySelector("div#word");
    let alphnode = document.querySelector('div#alphabet');
    let anode = document.querySelector('p#a');
    let inpt = document.querySelector('input#inpt');
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const word = words[getRandomIntInclusive(0, words.length)];
    unders = word.split('').map(function(charact){return " _ "}).join('');
    console.log("The random word is '", word, "'");
    console.log("unders starts as ", unders)

    wordnode.textContent = unders;
    alphnode.textContent = alphabet.join(" ");
  //----------------
    function makeUnders(word, letter) {
      let letters = word.split('');
      return letters.map(function(currentletter) {
        if (currentletter === letter) {
          return (letter)
          } else if (currentletter !== "_") {
            return currentletter
          } else {
          return "_"; 
          }
      }).join("");
    }
    unders = makeUnders(unders, letter);
  //----------------
      function getA() {
        anode.textContent = makeUnders(unders, 'a')
      }
      // get the letter from the user
      function getGuess() {
        anode.onclick = getA;
        return letter;
      }
  //----------------
  

  inpt.addEventListener('change', function() {
    letter = inpt.value;
    console.log(letter)
    unders = makeUnders(word, letter);
    wordnode.textContent = unders;
  })

   
}
window.onload = onLoad;

