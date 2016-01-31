var SlotMachineController = require('../controllers/SlotMachineController.js');

module.exports = {
  init: function() {
    var view = this;
    global.emitter.on('spinDone', function() {
      view.render();
    });
    view.render();
  },

  render: function() {
    var currentStats = SlotMachineController.getWinsLosses();
    $('#stats #wins').html('Wins: ' + currentStats[0]);
    $('#stats #losses').html('Losses: ' + currentStats[1]);
  }
}
