//sizes.js: Client for the DigitalOcean API.

var util        = require('util'),
    Client      = require('./client').Client;

var Sizes = exports.Sizes = function (options) {
  this.jsonAPIName = 'sizes';
  Client.call(this, options);
};

// Inherit from Client base object
util.inherits(Sizes, Client);

// ######################################################## Sizes
// ====================================== Listing Sizes
Sizes.prototype.list = function (cb) {
  this.request('GET', ['sizes'], cb);//all
};
