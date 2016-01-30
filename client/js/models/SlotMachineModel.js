var Slot = require('./slotModel.js');

module.exports = {
  slots: [new Slot(), new Slot(), new Slot()],
  start: function () {
    this.slots.forEach(function(slot) {
      slot.start();
    });
  },
  stop: function () {
    this.slots.forEach(function(slot) {
      slot.stop();
    });
  }
};
