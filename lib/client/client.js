//client.js

var request      = require('request'),
    util         = require('util'),
    EventEmitter = require('events').EventEmitter,
    Client       = require('./client').Client,
    qs           = require('querystring');


var Client = exports.Client = function (options) {
  this.options = options;
  // Each client has its own cookies to isolate authentication between clients
  this._request = request.defaults({
    jar:      this.options.get('no-cookies')? false : request.jar(),
    encoding: this.options.get('encoding') || null,
    timeout:  this.options.get('timeout')  || 240000,
    proxy:    this.options.get('proxy')    || null,
  });

  if (!this.jsonAPIName) {
    this.jsonAPIName = null;
  }

  if (typeof this.options.get !== 'function') {
    this.options.get = function (key) {
      return this[key];
    };
  }

};

util.inherits(Client, EventEmitter);

Client.prototype.request = function (method, uri) {
  var options, params = '', last_element, url, self, res, args = Array.prototype.slice.call(arguments),
      callback = args.pop(),
      body     = typeof args[args.length - 1] === 'object' && !Array.isArray(args[args.length - 1]) && args.pop(),
      proxy    = this.options.get('proxy'),
      auth = 'client_id=' + this.options.get('client_id') + '&api_key=' + this.options.get('api_key');


  if (typeof uri === 'object' && Array.isArray(uri)) {
    last_element = uri.pop();
    if(typeof last_element === 'function'){
      var error = new Error('Function passed as an argument; required parameters missing.');
      return callback(error);
    }
    if (typeof last_element === 'object') {// we have recieved an object
      params = '?' + qs.stringify(last_element) + '&' + auth;
    } else { // we have recieved a query string
      if (typeof last_element === 'string' && last_element.indexOf('?') === 0) {
        params = last_element + '&' + auth;
      } else {
        uri.push(last_element);
        params = '?' + auth;
      }
    }
    url = 'https://api.digitalocean.com/' + uri.join('/') + params;
  } else {
    if (uri.indexOf('https://api.digitalocean.com/') === -1) {
      url = 'https://api.digitalocean.com/' + uri;
    } else {
      url = uri;
    }
  }

  if(!options){
    var headerObj = {
                      'Content-Type' : 'application/json',
                      'Accept'       : 'application/json',
                      'User-Agent'   : 'OceanusAncora/0.0.1 (node/' + process.versions.node + ')'
                    };

   options = {
          method: method || 'GET',
          uri: url,
          headers: headerObj
        }
  }

  if (body) {
    options.body = JSON.stringify(body);
  }
  else if (method !== 'GET') {
    options.body = '{}';
  }

  if (proxy) {
    options.proxy = proxy;
  }

  self = this;
  self.emit('debug::request', options);

  this._request(options, function (err, response, result) {
    if (err) {
      return callback(err);
    }

    var statusCode, error;

    if(!result){ //should this really be an error?
      error = new Error('DigitalOcean returned an empty result');
      error.statusCode = 204;
      return callback(error);
    }
    try {
      statusCode = response.statusCode;
      res = JSON.parse(result);
    }
    catch (ex) {
      // Ignore Errors
    }

    self.emit('debug::response', { statusCode: statusCode, result: result });

    var retryAfter = response.headers['Retry-After'];
    if (retryAfter) {
      error = new Error('DigitalOcean rate limits.');
      error.statusCode = 429;
      error.result = retryAfter;
      return callback(error);
    }

    if (failCodes[statusCode]) {
      error = new Error('DigitalOcean Error (' + statusCode + '): ' + failCodes[statusCode]);
      error.statusCode = statusCode;
      error.result = result;
      return callback(error);
    }

    body = null;
    if (res) {
      if (!body && self.jsonAPIName !== null) {
        body = res[(self.jsonAPIName.toString())];
      }
      if (!body) {
        body = res;
      }
    }
    else {
      body = "";
    }

    callback(null, statusCode, body, response, res);
  });
};


var failCodes = {
  400: 'Bad Request',
  401: 'Not Authorized',
  403: 'Forbidden',
  404: 'Item not found',
  405: 'Method not Allowed',
  409: 'Conflict',
  429: 'Too Many Requests',
  500: 'Internal Server Error',
  503: 'Service Unavailable'
};

