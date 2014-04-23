// images-test.js: Client for the DigitalOcean API.

var test = require("tap").test,
  nock = require("nock"),
  oa   = require('../lib/client');

var client = oa.createClient({
  client_id:  'XXX',
  api_key:     'XXX'
});

//nock.recorder.rec();
nock('https://api.digitalocean.com:443:443')
  .get('/images/?client_id=XXX&api_key=XXX')
  .reply(200, "{\"status\":\"OK\",\"images\":[]}", { server: 'cloudflare-nginx',
  'content-type': 'application/json; charset=utf-8',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  status: '200 OK'});

/*
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
*/
test('Images Test Suite', function(t){

  t.test('List all images', function(t){
    t.plan(5);
    client.images.list(function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

  nock('https://api.digitalocean.com:443:443')
    .get('/images?filter=my_images&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"images\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('List all images with filter', function(t){
    t.plan(5);
    client.images.list('my_images', function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Show an Image
Images.prototype.show = function (image, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['images', image], cb);//all
};
*/

  nock('https://api.digitalocean.com:443:443')
    .get('/images/0?client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"images\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Show an image', function(t){
    t.plan(5);
    client.images.show(0, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Destroy an Image
Images.prototype.destroy = function (image, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['images', image, 'destroy'], cb);//all
};
*/

  nock('https://api.digitalocean.com:443:443')
    .get('/images/0/destroy?client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"images\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Destroy an image', function(t){
    t.plan(5);
    client.images.destroy(0, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Transfer an Image
Images.prototype.transfer = function (image, region_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['images', image, 'transfer', '?region_id=' + region_id], cb);//all
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/images/0/transfer?region_id=1&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"images\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Transfer an image (id)', function(t){
    t.plan(5);
    client.images.transfer(0, 1, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

  nock('https://api.digitalocean.com:443:443')
    .get('/images/fedora-17-x32/transfer?region_id=1&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"images\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Transfer an image (slug)', function(t){
    t.plan(5);
    client.images.transfer('fedora-17-x32', 1, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

});
