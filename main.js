
var Setup = require('./gamecopy.js');

//log it to be sure the scope is correct and the module.exports and the require is correct

var GameSetup = new Setup();
console.log('GameSetup',GameSetup);
GameSetup.generateRandomWord();
console.log('GameSetup',GameSetup);
console.log('GameSetup.RandomWord', GameSetup.RandomWord);
GameSetup.generateDisplayWord();
console.log('GameSetup',GameSetup);
console.log('GameSetup.gameDisplayWord',GameSetup.gameDisplayWord);


// console.log('random word stored in HangmanWord ',HangmanWord.nodeRandomWord);
// console.log('displayWord ', HangmanWord.displayWord);


// GameSetup.printGreetings();