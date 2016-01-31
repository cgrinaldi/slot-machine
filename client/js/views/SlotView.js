module.exports = {
  init: function(slotClass) {
    this.$slot = $(slotClass);
    this.render();
  },

  render: function() {
    this.$slot.html('Yay!');
  }
}
