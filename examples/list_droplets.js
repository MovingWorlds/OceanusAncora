var oa = require('../lib/client');// oceanusancora

var client = oa.createClient({
  client_id:  'XXX',
  api_key:     'XXX'
});

client.droplets.list(function (err, statusCode, body, response, res) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(JSON.stringify(res, null, 2, true));
});
