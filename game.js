var makeRandomWord = function() { 
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

	this.chooseWord = function() {
	var index = (Math.floor(Math.random()*14) + 1);
	this.RandomWord = this.nodePackages[index];
	}
}

module.exports = makeRandomWord; 