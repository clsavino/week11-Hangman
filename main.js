//var randomWord = require('./game.js');
//var word = require('./word.js');
//var inquirer = require('inquirer');
//var gameRandomWord = require('./letter.js');
var hangmanWord = require('./letter.js');
//var letter = require('./letter.js');
//log it to be sure the scope is correct and the module.exports and the require is correct
console.log('object in main',hangmanWord);

console.log("Let's play Node Package Hangman. \nGuess a letter in one of the most popular node packages ");
console.log('Here is your word\n\n',hangmanWord.displayWord);