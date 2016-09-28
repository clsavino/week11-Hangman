//var word = require('./word.js');
var inquirer = require('inquirer');
var gameHangmanWord = require('./letter.js');
var userGuess;
//log it to be sure the scope is correct and the module.exports and the require is correct

console.log("\nLet's play Node Package Hangman. \nGuess a letter in one of the most popular node packages ");
console.log('Here is your word\n\n',gameHangmanWord.displayWord);

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

