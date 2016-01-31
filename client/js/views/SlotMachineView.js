var SlotMachineController = require('../controllers/SlotMachineController.js');
var SlotView = require('./SlotView.js');

module.exports = {
  init: function (){
    this.$playButton = $('#playButton');
    this.$playButton.click(function() {
      SlotMachineController.play();
    });
    this.render();
  },

  render: function() {
    ['.slot-1','.slot-2','.slot-3'].forEach(function(slotClass){
      SlotView.init(slotClass);
    });
  }
}
