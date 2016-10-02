// Initalize all global variable and names of object instances to be used in main.js
var inquirer = require('inquirer');
var Setup = require('./game.js');
var HangmanWord = require('./letter.js');
var CheckGuesses = require('./word.js');
var GameSetup = Setup;
var	userGuess = '';
var displayWord = '';
var letterInWord = false;
var gameOver = false;
var gameHangmanWord;
var gameCheckGuesess;

// Inquire pkg used to prompt user for a letter 
var promptUser = function() {

	inquirer.prompt([
		{
			type: "input",
			message: "Enter a letter",
			name: "letter"
		}
		]).then(function (user) {
			// userGuess is the letter the player enters
			userGuess = user.letter;
			letterInWord = GameCheckGuesses.checkTheLetter(userGuess);
			// if letter entered is in the random word update the display word for player to see which position in word was guessed correctly
			if (letterInWord) {
				displayWord = GameHangmanWord.updateHangmanWord(userGuess);
				console.log('\n  Good guess!');
			// if letter is not in the word record that letter
			} else {
				gameOver = GameCheckGuesses.updateGuesses(userGuess);
				console.log('\n  Oops, Sorry not a good choice!');
			}
			// if player has guessed all the letters in the word then set gameOver flag
			if (GameHangmanWord.lettersLeft <=0) {
				gameOver = true;
			}
			// if game is not over show player the word with blanks and prompt to guess again
			if (!gameOver) {
				console.log('\n  ' + displayWord + '\n');
				// MUST BE LOCATED HERE AT END OF FUNCTION SO THE GAME WAITS FOR THE USER INPUT AND DOES NOT CONTINUE EXECUTING ASYNCHRONOUSLY
				promptUser();			
			} else {
				// if game is over, display the random word and prompt player to play again
				console.log('\n  Game Over!');
				console.log('\n  Your word was\n\n  ' + GameSetup.RandomWord);
				playAgain();
			}
		}) //end of .then
			.catch(function(e){
			console.log(e);
			console.log(e.stack);
		}) // end of inquirer.prompt
} //end of loop

// called to generate new random word and print greeting to player
// instantiates two objects to keep track of letters, number of guesses, and word with blanks to display to player (underscores are used for blanks)
function setup() {
	GameSetup.generateRandomWord();

	GameSetup.printGreetings();

	GameHangmanWord = new HangmanWord(GameSetup.RandomWord);
	displayWord = GameHangmanWord.makeHangmanWord();

	GameCheckGuesses = new CheckGuesses(GameSetup.RandomWord);
	console.log('\n  Here is your word\n\n  ' + displayWord + '\n');

}
 
// prompts to see if player wants to play again once game is over
// if yes, then sets up game with new random word again and prompts player
function playAgain() {
	inquirer.prompt([		
		{
			type: "input",
			message: "\n  Do you want to play Node Hangman? (y or n)",
			name: "letter"
		}

		]).then(function (user) {
			if (user.letter === 'y') {
				gameOver = false;
				//generates new random word, and displays greeting
				setup();
				// MUST BE LOCATED HERE AT END OF FUNCTION SO THE GAME WAITS FOR THE USER INPUT AND DOES NOT CONTINUE EXECUTING ASYNCHRONOUSLY
				promptUser();
			} else {
				console.log('\n  Goodbye!');
			}
		})
		//promptUser();
}

// Begin game with setup to generate new random word and prompt user for a letter
setup();
// ANY CODE THAT FOLLOWS THIS WILL RUN ASYNCHRONOUS FROM THIS AND WILL NOT PRODUCE THE EXPECTED RESULTS
promptUser();