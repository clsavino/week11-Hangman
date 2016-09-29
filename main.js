
var Setup = require('./game.js');

//log it to be sure the scope is correct and the module.exports and the require is correct

var GameSetup = new Setup();
//console.log('GameSetup',GameSetup);
GameSetup.generateRandomWord();
//console.log('GameSetup',GameSetup);
//console.log('GameSetup.RandomWord', GameSetup.RandomWord);
GameSetup.generateDisplayWord();
//console.log('GameSetup',GameSetup);
//console.log('GameSetup.gameDisplayWord',GameSetup.gameDisplayWord);

GameSetup.printGreetings();