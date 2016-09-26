var randomWord = function() { 
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
	this.word = '';

	this.chooseWord = function() {
	var index = (Math.floor(Math.random()*14) + 1);
	this.word = this.nodePackages[index];
	}
}

// var myRandom = new randomWord();
// myRandom.chooseWord();
// console.log('after funct call', myRandom.word);
module.exports = randomWord; 