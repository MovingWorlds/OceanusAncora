//domains-test.js: Client for the DigitalOcean API.

var test = require("tap").test,
  nock = require("nock"),
  oa   = require('../lib/client');

var client = oa.createClient({
  client_id:  'XXX',
  api_key:     'XXX'
});

//nock.recorder.rec();
nock('https://api.digitalocean.com:443:443')
  .get('/domains?client_id=XXX&api_key=XXX')
  .reply(200, "{\"status\":\"OK\",\"domains\":[]}", { server: 'cloudflare-nginx',
  'content-type': 'application/json; charset=utf-8',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  status: '200 OK'});


/*
// ====================================== Listing Domains
Domains.prototype.list = function (cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['domains'], cb);//all
};
*/
test('Domains Test Suite', function(t){

  t.test('List all domains', function(t){
    t.plan(5);
    client.domains.list(function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();


/*
// ====================================== Create New Domain
Domains.prototype.new = function (name, ip_address, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['domains', 'new', '?name=' + name + '&ip_address=' + ip_address], cb);//all
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/domains/new?name=test.example.com&ip_address=127.0.0.1&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"domains\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Create a new domain', function(t){
    t.plan(5);
    client.domains.new('test.example.com','127.0.0.1', function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Show A Domain
Domains.prototype.show = function (domain_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['domains', domain_id], cb);//all
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/domains/0?client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"domains\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Show a domain', function(t){
    t.plan(5);
    client.domains.show(0, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();


/*
// ====================================== Destroy a Domain
Domains.prototype.destroy = function (domain_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['domains', domain_id, 'destroy'], cb);//all
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/domains/0/destroy?client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\"}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Destroy a domain', function(t){
    t.plan(5);
    client.domains.destroy(0, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Listing Records for a given Domain
Domains.prototype.records = function (domain_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['domains', domain_id, 'records'], cb);//all
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/domains/0/records?client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\"}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Show a domain\'s records', function(t){
    t.plan(5);
    client.domains.records(0, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();


/*
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
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/domains/0/records/new?record_type=CNAME&data=www.example.com&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\"}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Create a new domain record', function(t){
    t.plan(5);
    client.domains.newRecord(0, 'CNAME', 'www.example.com', function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

  nock('https://api.digitalocean.com:443:443')
    .get('/domains/0/records/new?record_type=CNAME&data=www.example.com&name=CNAME&priority=2&port=8080&weight=2&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\"}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Create a new domain record with options', function(t){
    t.plan(5);
    client.domains.newRecord(0, 'CNAME', 'www.example.com',
      {name:     "CNAME",
       priority: 2,
       port:     8080,
       weight:   2}, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();


/*
// ====================================== Show a Record for a given Domain
Domains.prototype.showRecord = function (domain_id, record_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['domains', domain_id, 'records', record_id], cb);//all
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/domains/0/records/1?client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\"}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Show a Record for a given Domain', function(t){
    t.plan(5);
    client.domains.showRecord(0, 1, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Destroy a Record for a given Domain
Domains.prototype.destroyRecord = function (domain_id, record_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['domains', domain_id, 'records', record_id, 'destroy'], cb);//all
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/domains/0/records/1/destroy?client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\"}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Destroy a Record for a given Domain', function(t){
    t.plan(5);
    client.domains.destroyRecord(0, 1, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();


/*
// ====================================== Edit a Record for a given Domain
Domains.prototype.editRecord = function (domain_id, record_id, record_type, data, options, cb) {
  var query, args = Array.prototype.slice.call(arguments),
  cb = args.pop(), key;

  query = '?record_type=' + record_type;
  query = '&data='        + data;

  if(typeof options === 'object'){//name, priority, port, weight
    for(key in options){
      query += '&' + key + '=' + options[key].toString();
    }
  }
  this.request('GET', ['domains', domain_id, 'records', record_id, 'edit', query], cb);//all
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/domains/0/records/1/edit?record_type=CNAME&data=www.example.com&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\"}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Edit a new domain record', function(t){
    t.plan(5);
    client.domains.editRecord(0, 1, 'CNAME', 'www.example.com', function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

  nock('https://api.digitalocean.com:443:443')
    .get('/domains/0/records/1/edit?record_type=CNAME&data=www.example.com&name=CNAME&priority=2&port=8080&weight=2&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\"}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Edit a new domain record with options', function(t){
    t.plan(5);
    client.domains.editRecord(0, 1, 'CNAME', 'www.example.com',
      {name:     "CNAME",
       priority: 2,
       port:     8080,
       weight:   2}, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();
});
