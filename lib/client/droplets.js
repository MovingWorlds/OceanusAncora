//droplets.js: Client for the DigitalOcean API.

var util        = require('util'),
    Client      = require('./client').Client;

var Droplets = exports.Droplets = function (options) {
  this.jsonAPIName = 'droplets';
  Client.call(this, options);
};

// Inherit from Client base object
util.inherits(Droplets, Client);

// ######################################################## Droplets
// ====================================== Listing Droplets
Droplets.prototype.list = function (cb) {
  this.request('GET', ['droplets'], cb);//all
};

// ====================================== Add a new Droplet
Droplets.prototype.new = function (name, size, image, region, options, cb) {
  var query, args = Array.prototype.slice.call(arguments),
  cb = args.pop(), key;

  query = '?name='+name;
  query += typeof size   === 'number'? '&size_id='   + size.toString() :   '&size_slug='   + size;
  query += typeof image  === 'number'? '&image_id='  + image.toString() :  '&image_slug='  + image;
  query += typeof region === 'number'? '&region_id=' + region.toString() : '&region_slug=' + region;

  if(typeof options === 'object'){//ssh_key_ids, private_networking, backups_enabled
    for(key in options){
      query += '&' + key + '=' + options[key].toString();
    }
  }

  this.request('GET', ['droplets', 'new', query], cb);
};

// ====================================== Show a Droplet
Droplets.prototype.show = function (droplet_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id],  cb);
};

// ====================================== Reboot a Droplet
Droplets.prototype.reboot = function (droplet_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id, 'reboot'],  cb);
};

// ====================================== Power Cycle a Droplet
Droplets.prototype.powerCycle = function (droplet_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id, 'power_cycle'],  cb);
};

// ====================================== Shut Down a Droplet
Droplets.prototype.shutDown = function (droplet_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id, 'shutdown'],  cb);
};

// ====================================== Power Off a Droplet
Droplets.prototype.powerOff = function (droplet_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id, 'power_off'],  cb);
};

// ====================================== Power On a Droplet
Droplets.prototype.powerOn = function (droplet_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id, 'power_on'],  cb);
};

// ====================================== Reset root password on a Droplet
Droplets.prototype.passwordReset = function (droplet_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id, 'password_reset'],  cb);
};

// ====================================== Resize a Droplet
Droplets.prototype.resize = function (droplet_id, size, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  var query = typeof size   === 'number'? '?size_id='   + size.toString() :   '?size_slug='   + size;
  this.request('GET', ['droplets', droplet_id, 'resize', query],  cb);
};

// ====================================== Make a Snapshot of a Droplet
Droplets.prototype.snapshot = function (droplet_id, name, cb) {
  var query, args = Array.prototype.slice.call(arguments),
  cb = args.pop();

  query = typeof name === 'string' ? '?name=' + name : '';
  this.request('GET', ['droplets', droplet_id, 'snapshot', query],  cb);
};

// ====================================== Restore a Droplet
Droplets.prototype.restore = function (droplet_id, image_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id, 'restore', '?image_id=' + image_id],  cb);
};

// ====================================== Rebuild a Droplet
Droplets.prototype.rebuild = function (droplet_id, image_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id, 'rebuild', '?image_id=' + image_id],  cb);
};

// ====================================== Rename a Droplet
Droplets.prototype.rename = function (droplet_id, name, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id, 'rename', '?name=' + name],  cb);
};

// ====================================== Destroy a Droplet
Droplets.prototype.destroy = function (droplet_id, scrub_data, cb) {
  var query, args = Array.prototype.slice.call(arguments),
  cb = args.pop();

  query = typeof scrub_data === 'boolean' ? '?scrub_data=' + scrub_data.toString() : '';
  this.request('GET', ['droplets', droplet_id, 'destroy', query],  cb);
};


