// View is responsible for informing the user the status of their spin
module.exports = {
  init: function() {
    this.setupEventListeners();
    this.setupCloseDialog();
    this.render();
  },

  setupEventListeners: function() {
    var view = this;
    global.emitter.on('win', function(prize) {
      view.renderWin(prize);
    });
  },

  setupCloseDialog: function() {
    $('#winner #message #closeMessage').click(function() {
      $('#winner').hide();
    });
    $('#winner').click(function() {
      $(this).hide();
    });
  },

  renderWin: function(prize) {
    $('#winner #winningStatement').html('You have a won a free ' + prize.name + '!');
    $('#winner #winningImage').attr('src', prize.imgSrc);
    $('#winner').fadeIn(400);
  },

  render: function() {
    $('#winner').hide();
  }
}
