var randomWord = require('./game.js');
//make a new instance of the randomWord object to use the randomWord.chooseWord method
var myRandom = new randomWord();
myRandom.chooseWord();
//log it to be sure the scope is correct and the module.exports and the require is correct
console.log('word in main =',myRandom.word);