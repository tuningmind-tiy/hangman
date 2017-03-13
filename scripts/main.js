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
      document.querySelector('input#inpt').remove();
      return document.querySelector('div#msg').textContent =
        "game over"
    } else {
      letter = inpt.value;
      used.push(letter);
      unders = makeUnders(word, letter);
      wordnode.textContent = unders;
      alphabet[letter].style.color = "#141414";
      inpt.value = '';
      turns -= 1;
    }
  })
   
}
window.onload = onLoad;

