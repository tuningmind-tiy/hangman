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

  var anode = document.querySelector('div#a');
  function showA() {
    //document.getElementById("word").textContent = makeUnders(word, spot, letter) 
    console.log(" the letter a")
  }
  anode.onclick = showA;
  anode.textContent = "here is the new letter: A"
}
window.onload = onLoad;

