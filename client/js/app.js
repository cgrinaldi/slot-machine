function Slot(currPanel, $el) {
  this.currPanel = currPanel;
  this.currentAngle = 0;
  this.isRunning = false;
  this.$el = $el;
}

Slot.prototype.start = function () {
  var slot = this;
  var el = this.$el;
  this.isRunning = true;
  this.timer = setInterval(function() {
    slot.currentAngle += 120;
    el.css({
      transform: 'translateZ(-35px) rotateX(-' + slot.currentAngle + 'deg)'
    });
  }, 100);
};

Slot.prototype.stop = function() {
  this.isRunning = false;
  clearInterval(this.timer);
}

var a = new Slot(0, $('.slot-1'));
var b = new Slot(0, $('.slot-2'));
var c = new Slot(0, $('.slot-3'));

$('#btn1').click(function() {
  if (!a.isRunning) {
    a.start();
    a.isRunning = true;
  } else {
    a.isRunning = false;
    a.stop();
  }
});

$('#btn2').click(function() {
  if (!b.isRunning) {
    b.start();
    b.isRunning = true;
  } else {
    b.stop();
    b.isRunning = false;
  }
});

$('#btn3').click(function() {
  if (!c.isRunning) {
    c.start();
    c.isRunning = true;
  } else {
    c.stop();
    c.isRunning = false;
  }
});
