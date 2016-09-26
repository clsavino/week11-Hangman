var randomWord = require('./game.js');
var word = require('./word.js');
var letter = require('./letter.js');
//var inquirer = require('inquirer');
//make a new instance of the randomWord object to use the randomWord.chooseWord method
var gameRandomWord = new randomWord();
gameRandomWord.chooseWord();
//log it to be sure the scope is correct and the module.exports and the require is correct
console.log('word in main =',gameRandomWord.word);
module.exports = gameRandomWord;