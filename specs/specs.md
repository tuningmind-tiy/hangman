# Wordgame

## Description

You know the word-guessing game hangman? Well that's what you'll be building with this assignment.

Basically, it works like this:

- The app starts by choosing a random word
- The player can guess a single letter at a time
- The player has a fixed number of turns in which to guess all of the letters in the word
- The app should indicate when the player has won or lost

You can get super fancy with it... e.g. [Hangman Hero Android App demo](https://www.youtube.com/watch?v=TE9ahmj_5Hc).

## Objectives

You should…

- Demonstrate correct use of functions, conditionals, loops, arrays
- Properly sequence JavaScript statements
- Change the DOM based on application state (win/loss, valid/invalid guess)

## Details

### Instructions

- Create your project
- Create a file called for your words (e.g `js/common-words.js`) and paste this into it:

```javascript
// Here are the 100 most popular words in English, as totally
// stolen from here: https://gist.github.com/gravitymonkey/2406023
var commonWords = [
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
```

### Example

Say your game logic has chosen the word: "hello".

You should display:

    _ _ _ _ _

A visual indication (such as an underscore) for each letter in the word.

You should also display the number of turns remaining:

    Turns: 8

Next, the user guesses: a

You should decrement the number of turns remaining:

    Turns: 7 

And also continue displaying:

    _ _ _ _ _

Next, the user guesses: l

You should display:

    Turns: 7 

    _ _ l l _

And so forth.

### Deliverables

- The GitHub Repo url, containing:
  - standard repository files
  - `index.html`
  - A file with just your words list.  All words must be longer than 2 characters.
  - One or more CSS files in their own sub-directory
  - One or more JavaScript files in their own sub-directory
- The GitHub pages url

## Apprehensive Apprentice

The game should:

- Choose a random word *of 3 letters or more* from your words list.
- Allow the user to guess one letter at a time.
- When the user runs out of turns, show a losing screen.
- When the user guesses all of the letters in the word, show a winning screen.
- May use any non-console mechanism to interact with the user (e.g. prompt and alert are acceptable, as are input and manipulating DOM elements, but console.log and setting the current letter from the browser's console are not).

## Skilled Sorcerer

Apprehensive Apprentice mode plus the following:

- Don't let the user guess the same letter more than once.
- Display all guesses on the user's screen so the user knows what letters he/she has already guessed.
- Must use an HTML5 interface to get user inputs and display information to the user (i.e. may _not_ use prompt and alerts).
- Make it look good! Instead of showing the number of turns, you could show a health meter or [ascii art](http://i.stack.imgur.com/iMqfw.jpg).

## Wise Wizard

Skilled Sorcerer mode plus any or all of the following:

- Make it look amazing by showing an animation of the body part swaying when the user guesses incorrectly (you _may_ want to start with a [basic SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes) line and circle and then add the appropriate css transition or [animation](https://www.youtube.com/watch?v=f1WMjDx4snI).
- Make it sound great by playing a [death dirge](https://duckduckgo.com/?q=death+dirge) or other such audio when the user guesses incorrectly.
- When the player loses, play a video or show some funny losing animation.

git tag --annotate v0.1.0 -m "original attempt"
add tdd framework
master never loses a feature
when you have a new feature, merge "take-tdd" to master
add test, verify fails
write code to pass test


