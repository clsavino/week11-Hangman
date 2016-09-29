// Creates a string of all underscores to display to the user to begin the game
// currentWord is the array that the correct letters are pushed into, displayWord is the string version that is displayed

var HangmanWord = function(randomWord) {
	this.currentWord = [];
	this.displayWord = '';
	this.letterStr = '';
	this.lettersLeft = 0;
	this.nodeRandomWord = randomWord;
	//Make an array with all Underscores the length of the random word
	this.makeHangmanWord = function(){
		this.lettersLeft = this.nodeRandomWord.length;
		for (var i = 0; i < this.nodeRandomWord.length; i++) {
			this.currentWord[i] = '_';
		}
		this.displayWord = this.currentWord.join(' ');
	}
} //end of hangmanWord constructor

module.exports = HangmanWord;
