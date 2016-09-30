var inquirer = require('inquirer');

var HangmanWord = require('./letter.js');

var Setup = {
	nodePackages: [
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
		],
	RandomWord: '',
	gameDisplayWord: '',
	userGuess: '',
	greeting: "\nLet's play Node Package Hangman. \nGuess a letter in one of the most popular Node packages ",
	
	generateRandomWord : function() {
		var index = (Math.floor(Math.random()*14) + 1);
		this.RandomWord = this.nodePackages[index];
	},
	printGreetings : function() {
		console.log(this.greeting);
	},

	generateDisplayWord : function() {
		this.HangmanWord = new HangmanWord(this.RandomWord)
		this.HangmanWord.makeHangmanWord();
		this.gameDisplayWord = this.HangmanWord.displayWord;
		console.log('Here is your word\n\n' + this.HangmanWord.displayWord + '\n');
	},

	promptUser : function() {
		inquirer.prompt([
		{
			type: "input",
			message: "Enter a letter",
			name: "letter"
		}
 
		]).then(function (user) {
			this.userGuess = user.letter;
			console.log("\nYou entered " + this.userGuess);
		})
			.catch(function(e){
			console.log(e);
			console.log(e.stack);
		})
	}	
}; //end of Setup

module.exports = Setup; 