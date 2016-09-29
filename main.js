var HangmanWord = require('./letter.js');
var Setup = require('./game.js');

//log it to be sure the scope is correct and the module.exports and the require is correct

var GameSetup = new Setup();
//console.log(GameSetup);
GameSetup.chooseWord();
console.log('the random word ', GameSetup.RandomWord);
//console.log(GameSetup);
var HangmanWord = new HangmanWord(GameSetup.RandomWord );
HangmanWord.makeHangmanWord();
console.log('nodeRandomWord ',HangmanWord.nodeRandomWord);
console.log('displayWord ', HangmanWord.displayWord);
// GameHangmanWord.makeHangmanWord(GameSetup.RandomWord);
// console.log('the diplay word ', GameHangmanWord.nodeRandomWord);




