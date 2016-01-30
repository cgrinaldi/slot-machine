var SlotMachine = require('./models/SlotMachineModel.js');

setTimeout(function() {
  SlotMachine.start();
}, 100);

setTimeout(function() {
  SlotMachine.stop();
}, 500);
