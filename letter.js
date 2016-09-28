// the random word constructor is in game.js

// Invokes the randomWord generator in game.js to create the random word
// Creates a string of all underscores to display to the user to begin the game
// currentWord is the array that the correct letters are pushed into
// displayWord is the string version that is displayed
var randomWord = require('./game.js');
function HangmanWord(){
	this.currentWord = [];
	this.displayWord = '';
	this.letterStr = '';
	this.lettersLeft = 0;
	this.nodeRandomWord = '';
	this.makeRandomWord = function(){
		this.gameRandomWord = new randomWord();
		this.gameRandomWord.chooseWord();
		this.nodeRandomWord = this.gameRandomWord.word;
		console.log('the random word is',this.nodeRandomWord);
	},
	this.makeHangmanWord = function(){
		this.lettersLeft = this.nodeRandomWord.length;
		for (var i = 0; i < this.nodeRandomWord.length; i++){
			//Make an array with all Underscores the length of the random word
			this.currentWord[i] = '_';
		}
		this.displayWord = this.currentWord.join(' ');
		//console.log('displayWord in letterConst.js ',this.displayWord);
	}
} //end of hangmanWord constructor
var gameHangmanWord = new HangmanWord();

gameHangmanWord.makeRandomWord();
gameHangmanWord.makeHangmanWord();

//module.exports = gameRandomWord;
module.exports = gameHangmanWord;
