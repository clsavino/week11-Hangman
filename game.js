var inquirer = require('inquirer');

var HangmanWord = require('./letter.js');

var Setup = function(){
	this.nodePackages = 
		[
		'twitter',
		'spotify',
		'browserify',
		'grunt',
		'gulp',
		'mocha',
		'bower',
		'underscore',
		'cheerio',
		'passport',
		'nodemailer',
		'react',
		'karma',
		'angular'
		];
	this.RandomWord = '';
	this.gameDisplayWord = '';
	this.userGuess = '';
	this.greeting = "\nLet's play Node Package Hangman. \nGuess a letter in one of the most popular Node packages ";
	
	this.generateRandomWord = function() {
		var index = (Math.floor(Math.random()*14) + 1);
		this.RandomWord = this.nodePackages[index];
	};
	this.printGreetings = function() {
		console.log(this.greeting);
		console.log('Here is your word\n\n' + HangmanWord.displayWord + '\n');
	};
	this.generateDisplayWord = function() {
		this.HangmanWord = new HangmanWord(this.RandomWord )
		this.HangmanWord.makeHangmanWord();
		console.log('displayWord',this.HangmanWord.displayWord);
		this.gameDisplayWord = this.HangmanWord.displayWord;

	};
	this.promptUser = function() {
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
			this.userGuess = user.letter;
			console.log("\nYou entered " + this.userGuess);
		})
			.catch(function(e){
			console.log(e);
			console.log(e.stack);
		})
	}	
} //end of Setup



module.exports = Setup; 