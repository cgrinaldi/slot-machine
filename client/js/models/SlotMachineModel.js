var Slot = require('./slotModel.js');

module.exports = {
  slots: [new Slot(), new Slot(), new Slot()],

  isRunning: false,

  start: function () {
    this.isRunning = true;
    this.slots.forEach(function(slot) {
      slot.start();
    });
  },
  stop: function () {
    this.isRunning = false;
    this.slots.forEach(function(slot) {
      slot.stop();
    });
  }
};
