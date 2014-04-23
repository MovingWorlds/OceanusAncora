//domains.js: Client for the DigitalOcean API.

var util        = require('util'),
    Client      = require('./client').Client;


var Domains = exports.Domains = function (options) {
  this.jsonAPIName = 'domains';
  Client.call(this, options);
};

// Inherit from Client base object
util.inherits(Domains, Client);

// ######################################################## Domains
// ====================================== Listing Domains
Domains.prototype.list = function (cb) {
  this.request('GET', ['domains'], cb);//all
};

// ====================================== Create New Domain
Domains.prototype.new = function (name, ip_address, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['domains', 'new', '?name=' + name + '&ip_address=' + ip_address], cb);//all
};

// ====================================== Show A Domain
Domains.prototype.show = function (domain_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['domains', domain_id], cb);//all
};

// ====================================== Destroy a Domain
Domains.prototype.destroy = function (domain_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['domains', domain_id, 'destroy'], cb);//all
};

// ====================================== Listing Records for a given Domain
Domains.prototype.records = function (domain_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['domains', domain_id, 'records'], cb);//all
};

// ====================================== Create a new Record for a given Domain
Domains.prototype.newRecord = function (domain_id, record_type, data, options, cb) {
  var query, args = Array.prototype.slice.call(arguments),
  cb = args.pop(), key;

  query  = '?record_type=' + record_type;
  query += '&data='        + data;

  if(typeof options === 'object'){//name, priority, port, weight
    for(key in options){
      query += '&' + key + '=' + options[key].toString();
    }
  }
  this.request('GET', ['domains', domain_id, 'records', 'new', query], cb);//all
};

// ====================================== Show a Record for a given Domain
Domains.prototype.showRecord = function (domain_id, record_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['domains', domain_id, 'records', record_id], cb);//all
};

// ====================================== Destroy a Record for a given Domain
Domains.prototype.destroyRecord = function (domain_id, record_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['domains', domain_id, 'records', record_id, 'destroy'], cb);//all
};

// ====================================== Edit a Record for a given Domain
Domains.prototype.editRecord = function (domain_id, record_id, record_type, data, options, cb) {
  var query, args = Array.prototype.slice.call(arguments),
  cb = args.pop(), key;

  query = '?record_type=' + record_type;
  query += '&data='        + data;

  if(typeof options === 'object'){//name, priority, port, weight
    for(key in options){
      query += '&' + key + '=' + options[key].toString();
    }
  }
  this.request('GET', ['domains', domain_id, 'records', record_id, 'edit', query], cb);//all
};

