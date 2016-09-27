var randomWord = require('./game.js');

// var gameRandomWord = new randomWord();
// gameRandomWord.chooseWord();

// console.log('gameRandomWord in letter.js = ',gameRandomWord.word);

// Creates the word with all underscores to display 
// currentWord is the array that the correct letters are pushed into
// displayWord is the string version that is displayed
var hangmanWord = function(){
	this.currentWord = [],
	this.displayWord = [],
	this.letterStr = '',
	this.lettersLeft = 0,
	this.nodeRandomWord = '';

	this.gameRandomWord = function(){
		this.gameRandomWord = new randomWord();
		console.log('gameRandomWord',this.gameRandomWord);
		this.gameRandomWord.chooseWord();
		this.nodeRandomWord = this.gameRandomWord.word;
		//console.log('in letterConst, ', gameRandomWord.word);
		console.log('in letterConst nodeRandomWord ',this.nodeRandomWord);
	},
	this.makeHangmanWord = function(){
		this.lettersLeft = this.nodeRandomWord.length;
		for (var i = 0; i < this.nodeRandomWord.length; i++){
			//Make an array with all Underscores the length of the random word
			this.currentWord[i] = '_';
		}
		this.displayWord = this.currentWord.join(' ');
		console.log('displayWord in letterConst.js ',this.displayWord);
	}
} //end of hangmanWord function

var hangmanWord = new hangmanWord();
hangmanword.gameRandomWord();
hangmanWord.makeHangmanWord();
//module.exports = gameRandomWord;
module.exports = hangmanWord;
