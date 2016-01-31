var SlotMachineController = require('../controllers/SlotMachineController.js');

module.exports = {
  init: function() {
    this.$slot = $('.slot-1');
    this.$playButton = $('#playButton');
    this.$playButton.click(function() {
      SlotMachineController.play();
    });
  },

  render: function() {

  }
}
