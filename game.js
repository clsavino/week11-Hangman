var nodePackages = [
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
]

function randomWord() {
	var index = (Math.floor(Math.random()*14) + 1);
	console.log(index);
	var word = nodePackages[index];
	console.log(nodePackages[index]);
}

randomWord();