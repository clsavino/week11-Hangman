// Object constructor instantiated in main.js. Checks the letter input by player to determine if it is in the random word. Receives the random word as an argument from main.js after game setup
var CheckGuesses = function(randomWord) {
	this.RandomWord = randomWord;
	this.userGuess = '';
	this.usedLetters = [];
	this.remainingGuesses = 7;
	this.gameOver = false;
	this.letterInWord = false;

	// checks if letter is in the word and returns a flag
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

	// records the keeps track of all letters input by the user
	this.updateGuesses = function(userGuess) {
		this.userGuess = userGuess;
		var	pos = this.usedLetters.indexOf(this.userGuess);
	    // if userGuess is not in usedLetters array then add it in and update number of remaining guesses in the word
		if (pos === -1) {
			this.usedLetters.push(this.userGuess); 
			this.remainingGuesses --; 
		}
		//check to see if user has incorredtly guessed 7 times, if so game is over
		if (this.remainingGuesses <= 0) {
			this.gameOver = true;
		}
		return this.gameOver;
	}; // end of updateGuesses
} //end of CheckGuesses

module.exports = CheckGuesses;
	
