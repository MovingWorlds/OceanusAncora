// ssh_keys-test.js: Client for the DigitalOcean API.

var test = require("tap").test,
  nock = require("nock"),
  oa   = require('../lib/client');

var client = oa.createClient({
  client_id:  'XXX',
  api_key:     'XXX'
});

//nock.recorder.rec();
nock('https://api.digitalocean.com:443:443')
  .get('/ssh_keys?client_id=XXX&api_key=XXX')
  .reply(200, "{\"status\":\"OK\",\"ssh_keys\":[]}", { server: 'cloudflare-nginx',
  'content-type': 'application/json; charset=utf-8',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  status: '200 OK'});

/*
// ######################################################## SSH_Keys
// ====================================== Listing SSH_Keys
SSH_Keys.prototype.list = function (cb) {
  this.request('GET', ['ssh_keys'], cb);//all
};
*/
test('SSH_Keys Test Suite', function(t){

  t.test('List all SSH_Keys', function(t){
    t.plan(5);
    client.ssh_keys.list(function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Add a new SSH Key
SSH_Keys.prototype.new = function (name, ssh_pub_key, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['ssh_keys', 'new', '?name=' + name + '&ssh_pub_key=' + ssh_pub_key], cb);//all
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/ssh_keys/new?name=my_key&ssh_pub_key=ssh-dss%20AAAAB3NzaC1kc3MAAACBAK5uLwicCrFEpaVKBzkWxC7RQn+smg5ZQb5keh9RQKo8AszFTol5npgUAr0JWmqKIHv7nof0HndO86x9iIqNjq3vrz9CIVcFfZM7poKBJZ27Hv3v0fmSKfAc6eGdx8eM9UkZe1gzcLXK8UP2HaeY1Y4LlaHXS5tPi/dXooFVgiA7AAAAFQCQl6LZo/VYB9VgPEZzOmsmQevnswAAAIBCNKGsVP5eZ+IJklXheUyzyuL75i04OOtEGW6MO5TymKMwTZlU9r4ukuwxty+T9Ot2LqlNRnLSPQUjb0vplasZ8Ix45JOpRbuSvPovryn7rvS7//klu9hIkFAAQ/AZfGTw+696EjFBg4F5tN6MGMA6KrTQVLXeuYcZeRXwE5t5lwAAAIEAl2xYh098bozJUANQ82DiZznjHc5FW76Xm1apEqsZtVRFuh3V9nc7QNcBekhmHp5Z0sHthXCm1XqnFbkRCdFlX02NpgtNs7OcKpaJP47N8C+C/Yrf8qK/Wt3fExrL2ZLX5XD2tiotugSkwZJMW5Bv0mtjrNt0Q7P45rZjNNTag2c=%20user@host&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"ssh_keys\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Add a new SSH_Key', function(t){
    t.plan(5);
    client.ssh_keys.new('my_key','ssh-dss AAAAB3NzaC1kc3MAAACBAK5uLwicCrFEpaVKBzkWxC7RQn+smg5ZQb5keh9RQKo8AszFTol5npgUAr0JWmqKIHv7nof0HndO86x9iIqNjq3vrz9CIVcFfZM7poKBJZ27Hv3v0fmSKfAc6eGdx8eM9UkZe1gzcLXK8UP2HaeY1Y4LlaHXS5tPi/dXooFVgiA7AAAAFQCQl6LZo/VYB9VgPEZzOmsmQevnswAAAIBCNKGsVP5eZ+IJklXheUyzyuL75i04OOtEGW6MO5TymKMwTZlU9r4ukuwxty+T9Ot2LqlNRnLSPQUjb0vplasZ8Ix45JOpRbuSvPovryn7rvS7//klu9hIkFAAQ/AZfGTw+696EjFBg4F5tN6MGMA6KrTQVLXeuYcZeRXwE5t5lwAAAIEAl2xYh098bozJUANQ82DiZznjHc5FW76Xm1apEqsZtVRFuh3V9nc7QNcBekhmHp5Z0sHthXCm1XqnFbkRCdFlX02NpgtNs7OcKpaJP47N8C+C/Yrf8qK/Wt3fExrL2ZLX5XD2tiotugSkwZJMW5Bv0mtjrNt0Q7P45rZjNNTag2c= user@host',function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Show a SSH Key
SSH_Keys.prototype.show = function (ssh_key_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['ssh_keys', ssh_key_id], cb);//all
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/ssh_keys/875778?client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"ssh_keys\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Show a SSH_Key', function(t){
    t.plan(5);
    client.ssh_keys.show(875778, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
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
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/ssh_keys/875778/edit/?client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"ssh_keys\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Edit a SSH_Key (nop?)', function(t){
    t.plan(5);
    client.ssh_keys.edit(875778, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

  nock('https://api.digitalocean.com:443:443')
    .get('/ssh_keys/875778/edit?&name=my_key&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"ssh_keys\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Edit a SSH_Key (name)', function(t){
    t.plan(5);
    client.ssh_keys.edit(875778, {name:'my_key'}, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

  nock('https://api.digitalocean.com:443:443')
    .get('/ssh_keys/875778/edit?&ssh_pub_key=ssh-dss%20AAAAB3NzaC1kc3MAAACBAK5uLwicCrFEpaVKBzkWxC7RQn+smg5ZQb5keh9RQKo8AszFTol5npgUAr0JWmqKIHv7nof0HndO86x9iIqNjq3vrz9CIVcFfZM7poKBJZ27Hv3v0fmSKfAc6eGdx8eM9UkZe1gzcLXK8UP2HaeY1Y4LlaHXS5tPi/dXooFVgiA7AAAAFQCQl6LZo/VYB9VgPEZzOmsmQevnswAAAIBCNKGsVP5eZ+IJklXheUyzyuL75i04OOtEGW6MO5TymKMwTZlU9r4ukuwxty+T9Ot2LqlNRnLSPQUjb0vplasZ8Ix45JOpRbuSvPovryn7rvS7//klu9hIkFAAQ/AZfGTw+696EjFBg4F5tN6MGMA6KrTQVLXeuYcZeRXwE5t5lwAAAIEAl2xYh098bozJUANQ82DiZznjHc5FW76Xm1apEqsZtVRFuh3V9nc7QNcBekhmHp5Z0sHthXCm1XqnFbkRCdFlX02NpgtNs7OcKpaJP47N8C+C/Yrf8qK/Wt3fExrL2ZLX5XD2tiotugSkwZJMW5Bv0mtjrNt0Q7P45rZjNNTag2c=%20user@host&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"ssh_keys\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Edit a SSH_Key (key)', function(t){
    t.plan(5);
    client.ssh_keys.edit(875778, {ssh_pub_key:'ssh-dss AAAAB3NzaC1kc3MAAACBAK5uLwicCrFEpaVKBzkWxC7RQn+smg5ZQb5keh9RQKo8AszFTol5npgUAr0JWmqKIHv7nof0HndO86x9iIqNjq3vrz9CIVcFfZM7poKBJZ27Hv3v0fmSKfAc6eGdx8eM9UkZe1gzcLXK8UP2HaeY1Y4LlaHXS5tPi/dXooFVgiA7AAAAFQCQl6LZo/VYB9VgPEZzOmsmQevnswAAAIBCNKGsVP5eZ+IJklXheUyzyuL75i04OOtEGW6MO5TymKMwTZlU9r4ukuwxty+T9Ot2LqlNRnLSPQUjb0vplasZ8Ix45JOpRbuSvPovryn7rvS7//klu9hIkFAAQ/AZfGTw+696EjFBg4F5tN6MGMA6KrTQVLXeuYcZeRXwE5t5lwAAAIEAl2xYh098bozJUANQ82DiZznjHc5FW76Xm1apEqsZtVRFuh3V9nc7QNcBekhmHp5Z0sHthXCm1XqnFbkRCdFlX02NpgtNs7OcKpaJP47N8C+C/Yrf8qK/Wt3fExrL2ZLX5XD2tiotugSkwZJMW5Bv0mtjrNt0Q7P45rZjNNTag2c= user@host'}, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

  nock('https://api.digitalocean.com:443:443')
    .get('/ssh_keys/875778/edit?&name=my_key&ssh_pub_key=ssh-dss%20AAAAB3NzaC1kc3MAAACBAK5uLwicCrFEpaVKBzkWxC7RQn+smg5ZQb5keh9RQKo8AszFTol5npgUAr0JWmqKIHv7nof0HndO86x9iIqNjq3vrz9CIVcFfZM7poKBJZ27Hv3v0fmSKfAc6eGdx8eM9UkZe1gzcLXK8UP2HaeY1Y4LlaHXS5tPi/dXooFVgiA7AAAAFQCQl6LZo/VYB9VgPEZzOmsmQevnswAAAIBCNKGsVP5eZ+IJklXheUyzyuL75i04OOtEGW6MO5TymKMwTZlU9r4ukuwxty+T9Ot2LqlNRnLSPQUjb0vplasZ8Ix45JOpRbuSvPovryn7rvS7//klu9hIkFAAQ/AZfGTw+696EjFBg4F5tN6MGMA6KrTQVLXeuYcZeRXwE5t5lwAAAIEAl2xYh098bozJUANQ82DiZznjHc5FW76Xm1apEqsZtVRFuh3V9nc7QNcBekhmHp5Z0sHthXCm1XqnFbkRCdFlX02NpgtNs7OcKpaJP47N8C+C/Yrf8qK/Wt3fExrL2ZLX5XD2tiotugSkwZJMW5Bv0mtjrNt0Q7P45rZjNNTag2c=%20user@host&client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"ssh_keys\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Edit a SSH_Key (name & key)', function(t){
    t.plan(5);
    client.ssh_keys.edit(875778, {name:'my_key', ssh_pub_key:'ssh-dss AAAAB3NzaC1kc3MAAACBAK5uLwicCrFEpaVKBzkWxC7RQn+smg5ZQb5keh9RQKo8AszFTol5npgUAr0JWmqKIHv7nof0HndO86x9iIqNjq3vrz9CIVcFfZM7poKBJZ27Hv3v0fmSKfAc6eGdx8eM9UkZe1gzcLXK8UP2HaeY1Y4LlaHXS5tPi/dXooFVgiA7AAAAFQCQl6LZo/VYB9VgPEZzOmsmQevnswAAAIBCNKGsVP5eZ+IJklXheUyzyuL75i04OOtEGW6MO5TymKMwTZlU9r4ukuwxty+T9Ot2LqlNRnLSPQUjb0vplasZ8Ix45JOpRbuSvPovryn7rvS7//klu9hIkFAAQ/AZfGTw+696EjFBg4F5tN6MGMA6KrTQVLXeuYcZeRXwE5t5lwAAAIEAl2xYh098bozJUANQ82DiZznjHc5FW76Xm1apEqsZtVRFuh3V9nc7QNcBekhmHp5Z0sHthXCm1XqnFbkRCdFlX02NpgtNs7OcKpaJP47N8C+C/Yrf8qK/Wt3fExrL2ZLX5XD2tiotugSkwZJMW5Bv0mtjrNt0Q7P45rZjNNTag2c= user@host'}, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();

/*
// ====================================== Destroy a SSH Key
SSH_Keys.prototype.destroy = function (ssh_key_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['ssh_keys', ssh_key_id, 'destroy'], cb);//all
};
*/
  nock('https://api.digitalocean.com:443:443')
    .get('/ssh_keys/875778/destroy?client_id=XXX&api_key=XXX')
    .reply(200, "{\"status\":\"OK\",\"ssh_keys\":[]}", { server: 'cloudflare-nginx',
    'content-type': 'application/json; charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    status: '200 OK'});
  t.test('Destroy a SSH_Key', function(t){
    t.plan(5);
    client.ssh_keys.destroy(875778, function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();
});
