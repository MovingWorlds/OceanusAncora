//regions.js: Client for the DigitalOcean API.

var util        = require('util'),
    Client      = require('./client').Client;

var Regions = exports.Regions = function (options) {
  this.jsonAPIName = 'regions';
  Client.call(this, options);
};

// Inherit from Client base object
util.inherits(Regions, Client);

// ######################################################## Regions
// ====================================== Listing Regions
Regions.prototype.list = function (cb) {
  this.request('GET', ['regions'], cb);//all
};
