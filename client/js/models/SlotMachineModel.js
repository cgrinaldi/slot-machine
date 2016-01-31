var Slot = require('./slotModel.js');

module.exports = {
  slots: [new Slot('slot-1'), new Slot('slot-2'), new Slot('slot-3')],

  winsLosses: [0, 0],

  prizes: [
    {
      name: 'Coffee',
      imgSrc: 'http://placehold.it/350x350'
    },
    {
      name: 'Tea',
      imgSrc: 'http://placehold.it/350x350'
    },
    {
      name: 'Espresso',
      imgSrc: 'http://placehold.it/350x350'
    }
  ],

  isRunning: false,

  start: function () {
    this.isRunning = true;
    this.slots.forEach(function(slot) {
      slot.start();
    });
  },

  stop: function () {
    var machine = this;
    this.isRunning = false;
    for (var i = 0; i < this.slots.length; i++) {
      (function(slot, i) {
        setTimeout(function() {
          slot.stop();
          // Check to see if winner once all stopped
          if (i === 2) {
            machine.isWinner();
          }
        }, 650 * i);
      })(this.slots[i], i);
    }
  },

  isWinner: function() {
    var matchPanel = this.slots[0].currPanel;
    var counter = 1;
    for (var i = 1; i < this.slots.length; i++) {
      if (this.slots[i].currPanel === matchPanel) {
        counter++;
      }
    }
    var hasWon = counter === 3 ? true : false;

    // Add a slight delay since the slot is still visually spinning
    setTimeout(function() {
      if (hasWon) {
        this.winsLosses[0]++;
        global.emitter.emit('win', this.prizes[matchPanel]);
      } else {
        this.winsLosses[1]++;
        global.emitter.emit('loss');
      }
      global.emitter.emit('spinDone', this.winsLosses);
    }.bind(this), 500)
  }
};
