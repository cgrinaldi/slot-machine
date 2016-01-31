function Slot(name) {
  this.name = name;
  this.isRunning = false;
  this.getRandomPanel();
}

Slot.prototype.getRandomPanel = function() {
  var rand = Math.random();
  if (rand < 0.33) {
    this.currPanel = 0;
    this.currAngle = 0;
  } else if (rand < 0.66) {
    this.currPanel = 1;
    this.currAngle = 120;
  } else {
    this.currPanel = 2;
    this.currAngle = 240;
  }
};

// When a slot is started, we increment the panel and angle continuously
Slot.prototype.start = function () {
  var slot = this;
  slot.isRunning = true;
  global.emitter.emit(this.name + ':start', {currAngle: this.currAngle});
};

// When stopping, remove timer and select random panel to end on
Slot.prototype.stop = function() {
  this.isRunning = false;
  this.getRandomPanel();
  global.emitter.emit(this.name + ':stop', {currAngle: this.currAngle});
  console.log('stoped on panel', this.currPanel);
}

module.exports = Slot;
