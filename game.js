var HangmanWord = require('./letter.js');
//console.log('in game.js,HangmanWord ',HangmanWord);

var inquirer = require('inquirer');

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
	this.userGuess = '';
	this.greeting = "\nLet's play Node Package Hangman. \nGuess a letter in one of the most popular Node packages ";
	this.displayWordMsg = 'Here is your word\n\n', HangmanWord.displayWord + '\n';
	this.chooseWord = function() {
		var index = (Math.floor(Math.random()*14) + 1);
		this.RandomWord = this.nodePackages[index];
	},
	this.printGreetings = function() {
		console.log(this.greeting);
		console.log(this.displayWordMsg);
	},
	this.generateRandomWord = function() {
		this.chooseWord();
	},
	this.generateDisplayWord = function() {
		HangmanWord.makeHangmanWord();
	}
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