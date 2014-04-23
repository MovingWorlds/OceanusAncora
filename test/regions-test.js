//regions-test.js: Client tests for the DigitalOcean API.

var test = require("tap").test,
  nock = require("nock"),
  oa   = require('../lib/client');

var client = oa.createClient({
  client_id:  'XXX',
  api_key:     'XXX'
});

//nock.recorder.rec();
var DigitalOcean = nock('https://api.digitalocean.com:443:443')
  .get('/regions?client_id=XXX&api_key=XXX')
  .reply(200, "{\"status\":\"OK\",\"regions\":[{\"id\":3,\"name\":\"San Francisco 1\",\"slug\":\"sfo1\"},{\"id\":4,\"name\":\"New York 2\",\"slug\":\"nyc2\"},{\"id\":5,\"name\":\"Amsterdam 2\",\"slug\":\"ams2\"},{\"id\":6,\"name\":\"Singapore 1\",\"slug\":\"sgp1\"}]}", { server: 'cloudflare-nginx',
  'content-type': 'application/json; charset=utf-8',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  status: '200 OK' });

/*
// ====================================== Listing Regions
Regions.prototype.list = function (cb) {
  this.request('GET', ['regions'], cb);//all
};
*/
test('Regions Test Suite', function(t){

  t.test('List all regions', function(t){
    t.plan(5);
    client.regions.list(function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();
});
