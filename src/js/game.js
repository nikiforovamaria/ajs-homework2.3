const fs = require('fs');
const Character = require('./domain').Character;

class Game {
    start() {
      console.log('game started');
    }
  }
  
  class GameSavingData {
  }
  
  function readGameSaving() {
  }
  
  function writeGameSaving() {
  }

  module.exports = {
      Game,
      GameSavingData,
      readGameSaving,
      writeGameSaving,
  }