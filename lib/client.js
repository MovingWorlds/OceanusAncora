var parts = ['Droplets',
             'Regions',
             'Images',
             'SSH_Keys',
             'Sizes',
             'Domains',
             'Events'];

parts.forEach(function (k) {
  exports[k] = require('./client/' + k.toLowerCase())[k];
});

exports.createClient = function (options) {
  var nconf = require('nconf');
  nconf.env().argv({
    "c": {
      alias: 'client_id'
    },
    "a": {
      alias: 'api_key'
    }
  });

  options = nconf.defaults(options);

  var client = {};
  parts.forEach(function (k) {
    client[k.toLowerCase()] = new exports[k](options);
    client[k.toLowerCase()].on('debug::request',  debug);
    client[k.toLowerCase()].on('debug::response', debug);
  });
  function debug(arguments) {
    if (options.get('debug')) {
      console.log(arguments);
    }
  }
  return client;
};
