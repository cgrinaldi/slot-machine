var SlotMachine = require('../models/SlotMachineModel.js');

module.exports = {
  play: function() {
    if (SlotMachine.isRunning) {
      console.log('stopping!');
      SlotMachine.stop();
    } else {
      console.log('running!');
      SlotMachine.start();
    }
  }
};
