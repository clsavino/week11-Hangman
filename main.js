var Setup = require('./game.js');
var GameSetup = Setup;

// var Setup = require('./game.js');
// var GameSetup = new Setup();


GameSetup.generateRandomWord();
//console.log('GameSetup',GameSetup);
//console.log('GameSetup.RandomWord', GameSetup.RandomWord);

GameSetup.printGreetings();

GameSetup.generateDisplayWord();
//console.log('GameSetup',GameSetup);
//console.log('GameSetup.gameDisplayWord',GameSetup.gameDisplayWord);

var GameCheckGuesses = require('./word.js');
var GameCheckGuesses = new GameCheckGuesses(GameSetup.RandomWord);

GameSetup.promptUser();
