// events.js: Client for the DigitalOcean API.

var util        = require('util'),
    Client      = require('./client').Client;

var Events = exports.Events = function (options) {
  this.jsonAPIName = 'event';
  Client.call(this, options);
};

// Inherit from Client base object
util.inherits(Events, Client);

// ######################################################## Events
// ====================================== Listing Events
Events.prototype.show = function (event_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['events', event_id], cb);//all
};
