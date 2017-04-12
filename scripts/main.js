
window.onload = function () {

    let letter = '';
    let unders = '';
    let used = [];
    let turns = 20;
    let wordnode = document.querySelector("div#word");
    let inpt = document.querySelector('input#inpt');
    let msg = document.querySelector('div#msg');
    let alphabet= {
      'a': document.querySelector('p#a'),
      'b': document.querySelector('p#b'),
      'c': document.querySelector('p#c'),
      'd': document.querySelector('p#d'),
      'e': document.querySelector('p#e'),
      'f': document.querySelector('p#f'),
      'g': document.querySelector('p#g'),
      'h': document.querySelector('p#h'),
      'i': document.querySelector('p#i'),
      'j': document.querySelector('p#j'),
      'k': document.querySelector('p#k'),
      'l': document.querySelector('p#l'),
      'm': document.querySelector('p#m'),
      'n': document.querySelector('p#n'),
      'o': document.querySelector('p#o'),
      'p': document.querySelector('p#p'),
      'q': document.querySelector('p#q'),
      'r': document.querySelector('p#r'),
      's': document.querySelector('p#s'),
      't': document.querySelector('p#y'),
      'u': document.querySelector('p#u'),
      'v': document.querySelector('p#v'),
      'w': document.querySelector('p#w'),
      'x': document.querySelector('p#x'),
      'y': document.querySelector('p#y'),
      'z': document.querySelector('p#z')
    }
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const word = words[getRandomIntInclusive(0, words.length)];
    unders = word.split('').map(function(charact){return "_"}).join('');
    wordnode.textContent = unders;
  //----------------
    function makeUnders(word, letter) {
      let letters = word.split('');
      return letters.map(function(currentletter, index) {
        if (currentletter === letter) {
          return (letter)
          } else if (unders[index] !== "_") {
            return currentletter
          } else {
          return "_"; 
          }
      }).join("");
    }
    unders = makeUnders(unders, letter);
  //----------------
    function isLetterInWord (word, letter) {
      return (word.indexOf(letter) > -1)
    }
    function endGame() {
      inpt.value = '';
      msg.textContent = "Game over. The word was"
      wordnode.textContent = word; 
    }
    function tryAnother() {
      inpt.textContent= '';
      msg.textContent = "You already used that letter. Try another one."; 
    }
    function updateUnders(letter) {
      turns -= 1  
      used.push(letter);
      unders = makeUnders(word, letter);
      wordnode.textContent = unders;
      alphabet[letter].style.color = "black";
      inpt.value = '';
      msg.textContent = turns + " turns remaining"
    }
    function announceWin() {
      msg.textContent = "You won!";
      msg.style.color = "magenta";
    }

  //----------------
  inpt.addEventListener('input', function() {
    letter = inpt.value;
    let usedLetter = used.indexOf(letter) >= 0
    let wordGuessed = (word === unders)
    let goodGuess = isLetterInWord(word, letter)
    if (turns) {
      if (usedLetter){ tryAnother() } 
      else if (wordGuessed) { announceWin() } 
      else if (goodGuess) { updateUnders(letter) }
      else {
        msg.textContent = ''
        turns -= 1 
      }
    } else {
      endGame()
    }
  })
}

