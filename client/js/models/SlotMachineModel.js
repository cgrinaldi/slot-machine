var Slot = require('./slotModel.js');

module.exports = {
  slots: [new Slot('slot-1'), new Slot('slot-2'), new Slot('slot-3')],

  isRunning: false,

  start: function () {
    this.isRunning = true;
    this.slots.forEach(function(slot) {
      slot.start();
    });
  },
  stop: function () {
    this.isRunning = false;
    for (var i = 0; i < this.slots.length; i++) {
      (function(slot, i) {
        setTimeout(function() {
          slot.stop();
        }, 650 * i);
      })(this.slots[i], i);
    }
  }
};
