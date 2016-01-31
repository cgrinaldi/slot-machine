var SlotMachineView = require('./views/SlotMachineView.js');
var EventEmitter = require('events').EventEmitter;
global.emitter = new EventEmitter();
SlotMachineView.init();
