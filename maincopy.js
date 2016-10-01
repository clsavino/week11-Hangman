var inquirer = require('inquirer');
var Setup = require('./game.js');
var HangmanWord = require('./letter.js');
var CheckGuesses = require('./word.js');
var GameSetup = Setup;
var	userGuess = '';
var displayWord = '';
var letterInWord = false;
var gameOver = false;

var promptUser = function() {
	inquirer.prompt([
	{
		type: "input",
		message: "Enter a letter",
		name: "letter"
	}
	]).then(function (user) {
		userGuess = user.letter;
		letterInWord = GameCheckGuesses.checkTheLetter(userGuess);
		if (letterInWord) {
			displayWord = GameHangmanWord.updateHangmanWord(userGuess);
			console.log('\n  Good guess!');
		} else {
			gameOver = GameCheckGuesses.updateGuesses(userGuess);
			console.log('\n  Oops, Sorry not a good choice!');
		}
		if (GameHangmanWord.lettersLeft <=0) {
			gameOver = true;
		}
		if (!gameOver) {
			console.log('\n  ' + displayWord + '\n');
			promptUser();
		} else {
			console.log('\n  Game Over!');
			console.log('\n  Your word was\n  ' + GameSetup.RandomWord);
		}
	}) //end of .then
		.catch(function(e){
		console.log(e);
		console.log(e.stack);
	}) // end of inquirer.prompt
} //end of loop

//function setup() {
GameSetup.generateRandomWord();

GameSetup.printGreetings();

var GameHangmanWord =  new HangmanWord(GameSetup.RandomWord);
displayWord = GameHangmanWord.makeHangmanWord();

console.log('\n  GameHangmanWord',GameHangmanWord);

var GameCheckGuesses = new CheckGuesses(GameSetup.RandomWord);
console.log('\n  Here is your word\n\n  ' + displayWord + '\n');
//}

//setup();
promptUser();
//console.log('\n\n  Do you want to play Node Package Hangman?');