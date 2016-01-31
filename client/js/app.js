// Loading dependencies
var SlotMachineView = require('./views/SlotMachineView.js');
var WinnerView = require('./views/WinnerView.js');
var StatsView = require('./views/StatsView.js');
var EventEmitter = require('events').EventEmitter;

// Initializing application
global.emitter = new EventEmitter();
SlotMachineView.init();
WinnerView.init();
StatsView.init();
