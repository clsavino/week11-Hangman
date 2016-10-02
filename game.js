// Sets an array with 22 random node packages and uses a random number to pick a word from the array

//Could have used npm random-words to generate an array of 22 truly random words using:
	//var randomWords = require('random-words');
	//randomWord = randomWords(22);
	//console.log(randomWord);


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
		'angular',
		'request',
		'chalk',
		'express',
		'async',
		'debug',
		'moment',
		'bluebird',
		'color'
		],
	RandomWord: '',
	gameDisplayWord: '',
	greeting: "\n  Guess a letter in one of the most popular Node packages ",
	
	// generate a random word from the array of node packages
	generateRandomWord : function() {
		var index = (Math.floor(Math.random()*22) + 1);
		this.RandomWord = this.nodePackages[index];
	},
	// display set up greeting
	printGreetings : function() {
		console.log(this.greeting);
	}

}; //end of Setup

module.exports = Setup; 