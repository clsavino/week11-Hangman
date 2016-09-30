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
	greeting: "\n  Let's play Node Package Hangman. \nGuess a letter in one of the most popular Node packages ",
	
	generateRandomWord : function() {
		var index = (Math.floor(Math.random()*14) + 1);
		this.RandomWord = this.nodePackages[index];
	},

	printGreetings : function() {
		console.log(this.greeting);
	}

}; //end of Setup

module.exports = Setup; 