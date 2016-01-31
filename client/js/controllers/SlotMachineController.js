var SlotMachine = require('../models/SlotMachineModel.js');

module.exports = {
  play: function() {
    SlotMachine.start();
    setTimeout(function() {
      SlotMachine.stop();
    }, 1000);
  },

  getWinsLosses: function() {
    return SlotMachine.winsLosses;
  },

  isRunning: function() {
    if (SlotMachine.isRunning) {
      return true;
    }
    return false;
  }

};
