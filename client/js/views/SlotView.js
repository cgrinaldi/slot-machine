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
    slot.stop(data.currAngle);
  })
};

SlotView.prototype.spin = function(currAngle) {
  var slot = this.$slot;
  this.timer = setInterval(function() {
    slot.css({
      transform: 'translateZ(-35px) rotateX(-' + currAngle + 'deg)'
    });
    currAngle += 120;
  }, 75);
};

SlotView.prototype.stop = function(currAngle) {
  clearInterval(this.timer);
  this.$slot.css({
    transform: 'translateZ(-35px) rotateX(-' + currAngle + 'deg)'
  });
};

module.exports = SlotView;
