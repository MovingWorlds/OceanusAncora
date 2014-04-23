//ssh_keys.js: Client for the DigitalOcean API.

var util        = require('util'),
    Client      = require('./client').Client;


var SSH_Keys = exports.SSH_Keys = function (options) {
  this.jsonAPIName = 'ssh_keys';
  Client.call(this, options);
};

// Inherit from Client base object
util.inherits(SSH_Keys, Client);

// ######################################################## SSH_Keys
// ====================================== Listing SSH_Keys
SSH_Keys.prototype.list = function (cb) {
  this.request('GET', ['ssh_keys'], cb);//all
};

// ====================================== Add a new SSH Key
SSH_Keys.prototype.new = function (name, ssh_pub_key, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['ssh_keys', 'new', '?name=' + name + '&ssh_pub_key=' + ssh_pub_key], cb);//all
};

// ====================================== Show a SSH Key
SSH_Keys.prototype.show = function (ssh_key_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['ssh_keys', ssh_key_id], cb);//all
};

// ====================================== Edit a SSH Key
SSH_Keys.prototype.edit = function (ssh_key_id, options, cb) {
  var query, args = Array.prototype.slice.call(arguments),
  cb = args.pop(), key;

  if( args.length === 2 || args.length >= 2){
    query = '?';
    if(typeof options === 'object'){//name, ssh_pub_key
      for(key in options){
        query += '&' + key + '=' + options[key].toString();
      }
    }
  } else {
    query = '';
  }
  this.request('GET', ['ssh_keys', ssh_key_id, 'edit', query], cb);//all
};

// ====================================== Destroy a SSH Key
SSH_Keys.prototype.destroy = function (ssh_key_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['ssh_keys', ssh_key_id, 'destroy'], cb);//all
};
