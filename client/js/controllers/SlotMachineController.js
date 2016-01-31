var SlotMachine = require('../models/SlotMachineModel.js');

module.exports = {
  play: function() {
    if (SlotMachine.isRunning) {
      SlotMachine.stop();
    } else {
      SlotMachine.start();
    }
  },

};
