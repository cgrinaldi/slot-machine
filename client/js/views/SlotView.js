function SlotView(slotName) {
  this.slotName = slotName;
  this.$slot = $('.' + slotName);
  this.init();
}

SlotView.prototype.init = function() {
  var slot = this;
  global.emitter.on(slot.slotName + ':start', function(data) {
    slot.spin(data.currAngle);
  });
  global.emitter.on(slot.slotName + ':stop', function(data) {
    slot.stop();
  })
};

SlotView.prototype.spin = function(currAngle) {
  var slot = this.$slot;
  this.timer = setInterval(function() {
    slot.css({
      transform: 'translateZ(-60px) rotateX(-' + currAngle + 'deg)'
    });
    currAngle += 120;
  }, 500);
};

SlotView.prototype.stop = function() {
  clearInterval(this.timer);
};

module.exports = SlotView;
