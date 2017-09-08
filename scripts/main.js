//import define from './define'

function onLoad() {
  //----------------
    let letter = '';
    let unders = '';
    let used = [];
    const turns = 15;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const alphaNode = document.getElementById('alphabet')
    let alphaNodeNames = []
    alphabet.map(function(lett, i) {
      let newElem = document.createElement('p')
      newElem.innerHTML = lett
      newElem.setAttribute('id', lett)
      alphaNode.appendChild(newElem)
      alphaNodeNames.push(lett + 'node')
      alphaNodeNames[i] = document.querySelector('p#' + lett)
    })
    let wordnode = document.querySelector("div#word");
    
      // let anode = document.querySelector('p#a');
      // let bnode = document.querySelector('p#b');
      // let cnode = document.querySelector('p#c');
      // let dnode = document.querySelector('p#d');
      // let enode = document.querySelector('p#e');
      // let fnode = document.querySelector('p#f');
      // let gnode = document.querySelector('p#g');
      // let hnode = document.querySelector('p#h');
      // let inode = document.querySelector('p#i');
      // let jnode = document.querySelector('p#j');
      // let knode = document.querySelector('p#k');
      // let lnode = document.querySelector('p#l');
      // let mnode = document.querySelector('p#m');
      // let nnode = document.querySelector('p#n');
      // let onode = document.querySelector('p#o');
      // let pnode = document.querySelector('p#p');
      // let qnode = document.querySelector('p#q');
      // let rnode = document.querySelector('p#r');
      // let snode = document.querySelector('p#s');
      // let tnode = document.querySelector('p#t');
      // let unode = document.querySelector('p#u');
      // let vnode = document.querySelector('p#v');
      // let wnode = document.querySelector('p#w');
      // let xnode = document.querySelector('p#x');
      // let ynode = document.querySelector('p#y');
      // let znode = document.querySelector('p#z');
    let inpt = document.querySelector('input#inpt');
    let msg = document.querySelector('div#msg');
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const word = words[getRandomIntInclusive(0, words.length)];
    console.log("the word is: ", word)
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
  const definition = document.querySelector("div#definition")
  inpt.addEventListener('change', function() {
    if (turns === 0 ) {
      msg.textContent = "game over, no win this time"
      wordnode.textContent = word; 
      definition.textContent = "I am a future definition"
      return 
    } else if (used.indexOf(inpt.value) > -1) {
      inpt.value = '';
      msg.textContent = "You already used that letter"; 
    } else {
      msg.textContent = '';
      msg.textContent = turns + " turns remaining"
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
        definition.textContent = define(word);
      }
    }
  })
   
}
window.onload = onLoad;

