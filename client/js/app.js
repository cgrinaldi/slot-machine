// Loading dependencies
var SlotMachineView = require('./views/SlotMachineView.js');
var WinnerView = require('./views/WinnerView.js');
var EventEmitter = require('events').EventEmitter;

// Initializing application
global.emitter = new EventEmitter();
SlotMachineView.init();
WinnerView.init();
