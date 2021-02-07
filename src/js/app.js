const fs = require('fs');
const Game = require('./game').Game;
const GameSavingData = require('./game').GameSavingData;
const loadGame = require('./game').readGameSaving;
const saveGame = require('./game').writeGameSaving;

const game = new Game();
game.start();