function onLoad() {
  //----------------
    let letter = '';
    let unders = '';
    let used = [];
    let turns = 15;
    let alphabet = {
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
      't': document.querySelector('p#t'),
      'u': document.querySelector('p#u'),
      'v': document.querySelector('p#v'),
      'w': document.querySelector('p#w'),
      'x': document.querySelector('p#x'),
      'y': document.querySelector('p#y'),
      'z': document.querySelector('p#z')
    }
    let wordnode = document.querySelector("div#word");
      let anode = document.querySelector('p#a');
      let bnode = document.querySelector('p#b');
      let cnode = document.querySelector('p#c');
      let dnode = document.querySelector('p#d');
      let enode = document.querySelector('p#e');
      let fnode = document.querySelector('p#f');
      let gnode = document.querySelector('p#g');
      let hnode = document.querySelector('p#h');
      let inode = document.querySelector('p#i');
      let jnode = document.querySelector('p#j');
      let knode = document.querySelector('p#k');
      let lnode = document.querySelector('p#l');
      let mnode = document.querySelector('p#m');
      let nnode = document.querySelector('p#n');
      let onode = document.querySelector('p#o');
      let pnode = document.querySelector('p#p');
      let qnode = document.querySelector('p#q');
      let rnode = document.querySelector('p#r');
      let snode = document.querySelector('p#s');
      let tnode = document.querySelector('p#t');
      let unode = document.querySelector('p#u');
      let vnode = document.querySelector('p#v');
      let wnode = document.querySelector('p#w');
      let xnode = document.querySelector('p#x');
      let ynode = document.querySelector('p#y');
      let znode = document.querySelector('p#z');
    let inpt = document.querySelector('input#inpt');
    let msg = document.querySelector('div#msg');
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const word = words[getRandomIntInclusive(0, words.length)];
    unders = word.split('').map(function(charact){return "_"}).join('');
    console.log("The random word is '", word, "'");

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
  inpt.addEventListener('change', function() {
    if (turns === 0 ) {
      inpt.remove();
      return msg.textContent =
        "game over, no win this time"
    } else if (used.indexOf(inpt.value) > -1) {
      msg.style.color = "DeepPink";
      msg.textContent = "You already used that letter"; 
      inpt.value = '';
    } else {
      msg.textContent = '';
      msg.style.color = "#b1aeac";
      letter = inpt.value;
      used.push(letter);
      unders = makeUnders(word, letter);
      wordnode.textContent = unders;
      alphabet[letter].style.color = "#141414";
      inpt.value = '';
      turns -= 1;
      if (unders === word) {
        msg.textContent = "You won!";
        msg.style.color = "DeepPink";
        inpt.remove();
      }
    }
  })
   
}
window.onload = onLoad;

