function Slot() {
  this.isRunning = false;
  this.getRandomPanel();
}

Slot.prototype.getRandomPanel = function() {
  var rand = Math.random();
  if (rand < 0.33) {
    this.currPanel = 0;
    this.currentAngle = 0;
  } else if (rand < 0.66) {
    this.currPanel = 1;
    this.currentAngle = 120;
  } else {
    this.currPanel = 2;
    this.currentAngle = 240;
  }
};

// When a slot is started, we increment the panel and angle continuously
Slot.prototype.start = function () {
  var slot = this;
  slot.isRunning = true;
  slot.timer = setInterval(function() {
    slot.currentAngle += 120;
    slot.currPanel = (slot.currPanel + 1) % 3;
    console.log('on panel', slot.currPanel);
  }, 100);
};

// When stopping, remove timer and select random panel to end on
Slot.prototype.stop = function() {
  this.isRunning = false;
  clearInterval(this.timer);
  this.getRandomPanel();
  console.log('stoped on panel', this.currPanel);
}

module.exports = Slot;
