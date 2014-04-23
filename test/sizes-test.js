//sizes-test.js: Client for the DigitalOcean API.

var test = require("tap").test,
  nock = require("nock"),
  oa   = require('../lib/client');

var client = oa.createClient({
  client_id:  'XXX',
  api_key:     'XXX'
});

//nock.recorder.rec();
nock('https://api.digitalocean.com:443:443')
  .get('/sizes?client_id=XXX&api_key=XXX')
  .reply(200, "{\"status\":\"OK\",\"sizes\":[{\"id\":66,\"name\":\"512MB\",\"slug\":\"512mb\",\"memory\":512,\"cpu\":1,\"disk\":20,\"cost_per_hour\":0.00744,\"cost_per_month\":\"5.0\"},{\"id\":63,\"name\":\"1GB\",\"slug\":\"1gb\",\"memory\":1024,\"cpu\":1,\"disk\":30,\"cost_per_hour\":0.01488,\"cost_per_month\":\"10.0\"},{\"id\":62,\"name\":\"2GB\",\"slug\":\"2gb\",\"memory\":2048,\"cpu\":2,\"disk\":40,\"cost_per_hour\":0.02976,\"cost_per_month\":\"20.0\"},{\"id\":64,\"name\":\"4GB\",\"slug\":\"4gb\",\"memory\":4096,\"cpu\":2,\"disk\":60,\"cost_per_hour\":0.05952,\"cost_per_month\":\"40.0\"},{\"id\":65,\"name\":\"8GB\",\"slug\":\"8gb\",\"memory\":8192,\"cpu\":4,\"disk\":80,\"cost_per_hour\":0.11905,\"cost_per_month\":\"80.0\"},{\"id\":61,\"name\":\"16GB\",\"slug\":\"16gb\",\"memory\":16384,\"cpu\":8,\"disk\":160,\"cost_per_hour\":0.2381,\"cost_per_month\":\"160.0\"},{\"id\":60,\"name\":\"32GB\",\"slug\":\"32gb\",\"memory\":32768,\"cpu\":12,\"disk\":320,\"cost_per_hour\":0.47619,\"cost_per_month\":\"320.0\"},{\"id\":70,\"name\":\"48GB\",\"slug\":\"48gb\",\"memory\":49152,\"cpu\":16,\"disk\":480,\"cost_per_hour\":0.71429,\"cost_per_month\":\"480.0\"},{\"id\":69,\"name\":\"64GB\",\"slug\":\"64gb\",\"memory\":65536,\"cpu\":20,\"disk\":640,\"cost_per_hour\":0.95238,\"cost_per_month\":\"640.0\"}]}", { server: 'cloudflare-nginx',
  'content-type': 'application/json; charset=utf-8',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  status: '200 OK' });
/*
// ====================================== Listing Sizes
Sizes.prototype.list = function (cb) {
  this.request('GET', ['sizes'], cb);//all
};
*/
test('Sizes Test Suite', function(t){

  t.test('List all sizes', function(t){
    t.plan(5);
    client.sizes.list(function(err, statusCode, body, response, res){
      t.equals(err,        null,    "err should be null",             {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});

    });
  });
  t.end();
});
