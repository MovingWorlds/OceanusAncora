// droplets-test.js: Client for the DigitalOcean API.

var test = require("tap").test,
  nock = require("nock"),
  oa   = require('../lib/client');

var client = oa.createClient({
  client_id:  'XXX',
  api_key:     'XXX'
});

//nock.recorder.rec();
nock('https://api.digitalocean.com:443:443')
  .get('/droplets?client_id=XXX&api_key=XXX')
  .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
  'content-type': 'application/json; charset=utf-8',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  status: '200 OK'});

/*
// ====================================== Listing Droplets
Droplets.prototype.list = function (cb) {
  this.request('GET', ['droplets'], cb);//all
};
*/
test('Droplets Test Suite', function(t){

  t.test('List all droplets', function(t){
    t.plan(5);
    client.droplets.list(function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
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
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/droplets/new?name=www.example.com&size_id=0&image_id=1&region_id=2&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Add a new droplet (numbers)', function(t){
    t.plan(5);
    client.droplets.new('www.example.com', 0, 1, 2, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

  nock('https://api.digitalocean.com:443:443')
    .get('/droplets/new?name=www.example.com&size_slug=512mb&image_slug=debian-6-0-x64&region_slug=nyc2&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Add a new droplet (strings)', function(t){
    t.plan(5);
    client.droplets.new('www.example.com', '512mb', 'debian-6-0-x64', 'nyc2', function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

  nock('https://api.digitalocean.com:443:443')
    .get('/droplets/new?name=www.example.com&size_id=0&image_id=1&region_id=2&ssh_key_ids=478345,394849,938494&private_networking=true&backups_enabled=false&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Add a new droplet with options', function(t){
    t.plan(5);
    client.droplets.new('www.example.com', 0, 1, 2,
      {ssh_key_ids: '478345,394849,938494',
       private_networking: true,
       backups_enabled:    false}, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Show a Droplet
Droplets.prototype.show = function (droplet_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id],  cb);
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/droplets/0?client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Show a droplet', function(t){
    t.plan(5);
    client.droplets.show(0, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Reboot a Droplet
Droplets.prototype.reboot = function (droplet_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id, 'reboot'],  cb);
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/droplets/0/reboot?client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Reboot a droplet', function(t){
    t.plan(5);
    client.droplets.reboot(0, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Power Cycle a Droplet
Droplets.prototype.powerCycle = function (droplet_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id, 'power_cycle'],  cb);
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/droplets/0/power_cycle?client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Power Cycle a droplet', function(t){
    t.plan(5);
    client.droplets.powerCycle(0, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Shut Down a Droplet
Droplets.prototype.shutDown = function (droplet_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id, 'shutdown'],  cb);
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/droplets/0/shutdown?client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Shut Down a droplet', function(t){
    t.plan(5);
    client.droplets.shutDown(0, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Power Off a Droplet
Droplets.prototype.powerOff = function (droplet_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id, 'power_off'],  cb);
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/droplets/0/power_off?client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Power off a droplet', function(t){
    t.plan(5);
    client.droplets.powerOff(0, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Power On a Droplet
Droplets.prototype.powerOn = function (droplet_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id, 'power_on'],  cb);
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/droplets/0/power_on?client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Power on a droplet', function(t){
    t.plan(5);
    client.droplets.powerOn(0, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Reset root password on a Droplet
Droplets.prototype.passwordReset = function (droplet_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id, 'password_reset'],  cb);
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/droplets/0/password_reset?client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Reset root password on a droplet', function(t){
    t.plan(5);
    client.droplets.passwordReset(0, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Resize a Droplet
Droplets.prototype.resize = function (droplet_id, size, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  var query = typeof size   === 'number'? '?size_id='   + size.toString() :   '?size_slug='   + size;
  this.request('GET', ['droplets', droplet_id, 'resize', query],  cb);
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/droplets/0/resize?size_id=1&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Reset root password on a droplet', function(t){
    t.plan(5);
    client.droplets.resize(0, 1, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

  nock('https://api.digitalocean.com:443:443')
    .get('/droplets/0/resize?size_slug=512mb&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Reset root password on a droplet', function(t){
    t.plan(5);
    client.droplets.resize(0, '512mb', function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Make a Snapshot of a Droplet
Droplets.prototype.snapshot = function (droplet_id, name, cb) {
  var query, args = Array.prototype.slice.call(arguments),
  cb = args.pop();

  query = typeof name === 'string' ? '?name=' + name : '';
  this.request('GET', ['droplets', droplet_id, 'snapshot', query],  cb);
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/droplets/0/snapshot/?client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Make a Snapshot of a Droplet', function(t){
    t.plan(5);
    client.droplets.snapshot(0, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

  nock('https://api.digitalocean.com:443:443')
    .get('/droplets/0/snapshot?name=512mb&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Make a Snapshot of a Droplet with a name', function(t){
    t.plan(5);
    client.droplets.snapshot(0, '512mb', function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Restore a Droplet
Droplets.prototype.restore = function (droplet_id, image_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id, 'restore', '?image_id=' + image_id],  cb);
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/droplets/0/restore?image_id=1&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Restore a Droplet', function(t){
    t.plan(5);
    client.droplets.restore(0, 1, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Rebuild a Droplet
Droplets.prototype.rebuild = function (droplet_id, image_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id, 'rebuild', '?image_id=' + image_id],  cb);
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/droplets/0/rebuild?image_id=1&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Rebuild a Droplet', function(t){
    t.plan(5);
    client.droplets.rebuild(0, 1, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Rename a Droplet
Droplets.prototype.rename = function (droplet_id, name, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['droplets', droplet_id, 'rename', '?name=' + name],  cb);
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/droplets/0/rename?name=Whats.Up.Doc&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Rename a Droplet', function(t){
    t.plan(5);
    client.droplets.rename(0, 'Whats.Up.Doc', function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Destroy a Droplet
Droplets.prototype.destroy = function (droplet_id, scrub_data, cb) {
  var query, args = Array.prototype.slice.call(arguments),
  cb = args.pop();

  query = typeof scrub_data === 'boolean' ? '?scrub_data=' + scrub_data.toString() : '';
  this.request('GET', ['droplets', droplet_id, 'destroy', query],  cb);
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/droplets/0/destroy/?client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Destroy a Droplet', function(t){
    t.plan(5);
    client.droplets.destroy(0, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

  nock('https://api.digitalocean.com:443:443')
    .get('/droplets/0/destroy?scrub_data=true&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"droplets\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Destroy a Droplet and scrub data', function(t){
    t.plan(5);
    client.droplets.destroy(0, true, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

});
