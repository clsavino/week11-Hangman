//var word = require('./word.js');
var inquirer = require('inquirer');
var makeRandomWord = require('./game.js');
var HangmanWord = require('./letter.js');
var userGuess;
//log it to be sure the scope is correct and the module.exports and the require is correct
var makeRandomWord = new makeRandomWord();
makeRandomWord.chooseWord();
var HangmanWord = new HangmanWord(makeRandomWord.RandomWord );
HangmanWord.makeHangmanWord();
console.log('\nin main, makeRandWord.RandomWord', makeRandomWord.RandomWord );
console.log('HangmanWord ',HangmanWord.displayWord); 
console.log("\nLet's play Node Package Hangman. \nGuess a letter in one of the most popular Node packages ");
console.log('Here is your word\n\n', HangmanWord.displayWord + '\n');

function prompt() {
	inquirer.prompt([

		// Here we create a basic text prompt.
		{
			type: "input",
			message: "Enter a letter",
			name: "letter"
		}
// Once we are done with all the questions... "then" we do stuff with the answers
// In this case, we store all of the answers into a "user" object that inquirer makes for us. 
	]).then(function (user) {
		userGuess = user.letter;
		console.log("\nYou entered " + userGuess);
	})
		.catch(function(e){
		console.log(e);
		console.log(e.stack);
	})
}	
prompt();

