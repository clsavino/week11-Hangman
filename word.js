var HangmanWord = require('./letter.js');

var CheckGuesses = function(randomWord) {
	this.RandomWord = randomWord;
	this.userGuess = '';
	this.usedLetters = [];
	this.usedIndex = 0;
	this.remainingGuesses = 7;
	this.gameOver = false;

	this.checkTheLetter = function(userGuess) {
		var pos = this.RandomWord.indexOf(this.userGuess);
		if (pos >-1) {
			this.HangmanWord.updateWord(this.userGuess);
		} else {
			this.CheckGuesses.updateGuesses();
		}
	}; 

	this.updateGuesses = function(userGuess) {
		var	pos = this.usedLetters.indexOf(this.userGuess);
	    // if userGuess is not in usedLetters array then add it in
		if (pos === -1) {
			this.usedLetters[this.usedIndex] = this.userGuess;// Put userGuess in usedLetters array
			this.usedIndex = this.usedIndex + 1;// update #of trys 
			this.remainingGuesses = this.remainingGuesses - 1; //decrement number of guesses they have left
		}

		//check to see if used all 7 guesses
		if (this.remainingGuesses <= 0) {
			this.gameOver = true;
		}
	} // end of updateGuesses
}

module.exports = CheckGuesses;
	
