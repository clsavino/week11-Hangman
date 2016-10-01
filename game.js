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
	
	generateRandomWord : function() {
		var index = (Math.floor(Math.random()*22) + 1);
		this.RandomWord = this.nodePackages[index];
	},

	printGreetings : function() {
		console.log(this.greeting);
	}

}; //end of Setup

module.exports = Setup; 