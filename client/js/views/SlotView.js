module.exports = {
  init: function(slotName) {
    console.log('slotname is', slotName);
    var slot = this;
    this.$slot = $('.' + slotName);
    console.log('slot is', this.$slot);
    global.emitter.on(slotName + ':start', function(data) {
      slot.spin(data.currAngle);
    });
    global.emitter.on(slotName + ':stop', function(data) {
      console.log('stopping', slotName);
      slot.stop();
    });
    // this.render();
  },

  spin: function(currAngle) {
    var slot = this.$slot;
    this.timer = setInterval(function() {
      slot.css({
        transform: 'translateZ(-60px) rotateX(-' + currAngle + 'deg)'
      });
      currAngle += 120;
    }, 100);
  },

  stop: function() {
    console.log("CLEARNING");
    clearInterval(this.timer);
  },

  render: function() {

  }
}
