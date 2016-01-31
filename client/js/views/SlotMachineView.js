var SlotMachineController = require('../controllers/SlotMachineController.js');
var SlotView = require('./SlotView.js');

module.exports = {
  init: function (){
    this.$playButton = $('#playButton');
    this.$playButton.click(function() {
      // Only want the user to be able to click if machine not already running
      if (!SlotMachineController.isRunning()) {
        SlotMachineController.play();
      }
    });
    this.render();
  },

  render: function() {
    ['slot-1','slot-2','slot-3'].forEach(function(slotClass){
      new SlotView(slotClass);
    });
  }
}
