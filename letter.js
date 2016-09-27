var randomWord = require('./game.js');

// Creates the word with all underscores to display 
// currentWord is the array that the correct letters are pushed into
// displayWord is the string version that is displayed
var hangmanWord = {
	currentWord: [],
	displayWord: [],
	letterStr: '',
	lettersLeft: 0,
	nodeRandomWord: '',

	gameRandomWord: function() {
		this.gameRandomWord = new randomWord();
		console.log('gameRandomWord',this.gameRandomWord);
		this.gameRandomWord.chooseWord();
		this.nodeRandomWord = this.gameRandomWord.word;
	},
	
	makeHangmanWord: function(){
		this.lettersLeft = this.nodeRandomWord.length;
		for (var i = 0; i < this.nodeRandomWord.length; i++){
			//Make an array with all Underscores the length of the random word
			this.currentWord[i] = '_';
		}
		this.displayWord = this.currentWord.join(' ');
		console.log('displayWord in letter.js ',this.displayWord);
	}
}

hangmanWord.gameRandomWord();
hangmanWord.makeHangmanWord();

module.exports = hangmanWord;
