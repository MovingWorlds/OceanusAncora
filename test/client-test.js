// client-test.js: Client for the DigitalOcean API.

var test = require("tap").test,
  nock = require("nock"),
  oa   = require('../lib/client');

var client = oa.createClient({
  client_id:  'XXX',
  api_key:     'XXX'
});


//nock.recorder.rec();
nock('https://api.digitalocean.com:443:443')
  .get('/events/0?client_id=XXX&api_key=XXX')
  .reply(200, "{\"status\":\"ERROR\",\"error_message\":\"No Event Found\",\"message\":\"No Event Found\"}", { server: 'cloudflare-nginx',
  'content-type': 'application/json; charset=utf-8',
  'transfer-encoding': 'chunked',
  connection: 'keep-alive',
  status: '200 OK',
});


test('Client Test Suite', function(t){

  t.test('Error on Show an event (missing parameter)', function(t){
    t.plan(1);
    client.events.show(function(err){
      t.isNot(err, 0, 'Should error if missing parameters', {todo: false});
    });
  });
  t.end();


});
