var CheckGuesses = function(randomWord) {
	this.RandomWord = randomWord;
	this.userGuess = '';
	this.usedLetters = [];
	this.remainingGuesses = 7;
	this.gameOver = false;
	this.letterInWord = false;

	this.checkTheLetter = function(userGuess) {
		this.userGuess = userGuess;
		var pos = this.RandomWord.indexOf(this.userGuess);
		if (pos >-1) {
			letterInWord = true;
		} else {
			letterInWord = false;
		}
		return letterInWord;
	}; 

	this.updateGuesses = function(userGuess) {
		this.userGuess = userGuess;
		var	pos = this.usedLetters.indexOf(this.userGuess);
	    // if userGuess is not in usedLetters array then add it in
		if (pos === -1) {
			this.usedLetters.push(this.userGuess); 
			this.remainingGuesses --; 
		}
		//check to see if used all 7 guesses
		if (this.remainingGuesses <= 0) {
			this.gameOver = true;
		}
		return this.gameOver;
	}; // end of updateGuesses
} //end of CheckGuesses

module.exports = CheckGuesses;
	
