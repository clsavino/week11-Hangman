// Creates a string of all underscores to display to the user at the beginning of the game - this is referred to as HangmanWord
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

	// Using the letter the user guessed as an argument, this function checks to see if the letter has already been used 
	// if not then it updates currentWord to contain all the instances of that letter in the word replacing blanks with the letter in the correct position
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
		// make a string with all letters and blanks separated by spaces to display the partially guessed random word
	 	this.displayWord = this.currentWord.join(" ");
	 	// if all letters have been guessed correctly then game is over
	 	if (this.lettersLeft <=0) {
	 		this.gameOver = true;
	 	}
	 	return this.displayWord;
	};
} //end of hangmanWord constructor

module.exports = HangmanWord;
