// events-test.js: Client for the DigitalOcean API.

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


/*
// ====================================== Listing Events
Events.prototype.show = function (event_id, cb) {
  var args = Array.prototype.slice.call(arguments),
  cb = args.pop();
  this.request('GET', ['events', event_id], cb);//all
};
*/

test('Events Test Suite', function(t){

  t.test('Show an event', function(t){
    t.plan(6);
    client.events.show(function(err){
      t.isNot(err, 0, 'Should error if missing parameters', {todo: false});
    });
    client.events.show(0, function(err, statusCode, body, response, res){
      t.equals(err,        null,   "err should be null",              {todo: false});
      t.equals(statusCode, 200,    "statusCode should be 200",        {todo: false});
      t.type(  body,       Object, "body shoud return an object",     {todo: false});
      t.type(  response,   Object, "response shoud return an object", {todo: false});
      t.type(  res,        Object, "res shoud return an object",      {todo: false});
    });
  });
  t.end();
});
