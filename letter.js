// Creates a string of all underscores to display to the user to begin the game - this is referred to as HangmanWord
// currentWord is the array that the correct letters are pushed into 
// displayWord is the string version that is displayed

var HangmanWord = function(randomWord) {
	this.currentWord = [];
	this.displayWord = '';
	this.lettersLeft = 0;	
	this.userGuess = '';
	this.alreadyUsed = [];
	this.gameOver = false;
	this.nodeRandomWord = randomWord;
	//Make an array with all Underscores the length of the random word
	this.makeHangmanWord = function(){
		this.lettersLeft = this.nodeRandomWord.length;
		for (var i = 0; i < this.nodeRandomWord.length; i++) {
			this.currentWord[i] = '_';
		}
		this.displayWord = this.currentWord.join(' ');
		return this.displayWord;
	};

	this.updateHangmanWord = function(userGuess) {
		this.userGuess = userGuess;
		// Put userGuess in alreadyUsed array
 		var pos = this.alreadyUsed.indexOf(this.userGuess);
 		if (pos === -1) {
 		// Put userGuess in array of blanks in every spot it belongs (could be multiple locations)
			this.alreadyUsed.push(this.userGuess);
		    for(var i=0; i < this.nodeRandomWord.length; i++) {
		    	
		        if (this.nodeRandomWord[i] === this.userGuess) {
		        	this.currentWord[i] = this.userGuess;
		        	this.lettersLeft --;
		        }
		    }
		}
	 	this.displayWord = this.currentWord.join(" ");
	 	if (this.lettersLeft <=0) {
	 		this.gameOver = true;
	 	}
	 	return this.displayWord;
	};
} //end of hangmanWord constructor

module.exports = HangmanWord;
