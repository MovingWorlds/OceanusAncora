// images.js: Client for the DigitalOcean API.

var util        = require('util'),
    Client      = require('./client').Client;

var Images = exports.Images = function (options) {
  this.jsonAPIName = 'images';
  Client.call(this, options);
};

// Inherit from Client base object
util.inherits(Images, Client);

// ######################################################## Images
// ====================================== Listing Images
Images.prototype.list = function (filter, cb) {
  var query, args = Array.prototype.slice.call(arguments),
  cb = args.pop(), key;

  if(typeof filter === 'string'){ //
    query = '?filter=' + filter;
  } else {
    query = '';
  }
  this.request('GET', ['images', query], cb);//all
};

// ====================================== Show an Image
Images.prototype.show = function (image, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['images', image], cb);//all
};

// ====================================== Destroy an Image
Images.prototype.destroy = function (image, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['images', image, 'destroy'], cb);//all
};

// ====================================== Transfer an Image
Images.prototype.transfer = function (image, region_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['images', image, 'transfer', '?region_id=' + region_id], cb);//all
};
