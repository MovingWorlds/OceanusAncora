# OceanusAncora
---
A DigitalOcean API client for use with NodeJS.


## Example

```js
var oa = require('oceanusancora'),
    fs = require('fs');

var client = oa.createClient({
  client_id:  'id',
  api_key:    'key'
});

client.droplets.list(function (err, statusCode, body, response, res) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(JSON.stringify(res, null, 2, true));
});
```
Take a look in the `examples` folder for more examples.

## Install

Install using npm:
```bash
npm install oceanusancora
```



## Command Line Options for scripts

Below is a list of options you may use when calling any scripts you may have written

```
-c --client_id X
-a --api_key X
--debug
--no-cookies
--timeout X(ms)
--proxy X
--encoding X
```

They are fairly self-explanatory no-cookies, timeout, proxy, encoding are all options to request. if using debug its reccomended you use `--encoding utf8` or something similar as all you will see is a buffer otherwise in the response.

Because of these command line options you can try a few already from the examples section:

```bash
node examples/list_droplets.js -c <client_id> -a <api_key>
```


## Methods

### domains

```js
// Listing Domains
list(cb)

// Create New Domain
new(name, ip_address, cb)

// Show A Domain
show(domain_id, cb)

// Destroy a Domain
destroy(domain_id, cb)

// Listing Records for a given Domain
records(domain_id, cb)

// Create a new Record for a given Domain
newRecord(domain_id, record_type, data, options, cb)

// Show a Record for a given Domain
showRecord(domain_id, record_id, cb)

// Destroy a Record for a given Domain
destroyRecord(domain_id, record_id, cb)

// Edit a Record for a given Domain
editRecord(domain_id, record_id, record_type, data, options, cb)


```

### droplets

```js
// Listing Droplets
list(cb)

// Add a new Droplet
new(name, size, image, region, options, cb)// options = {ssh_key_ids : 'string(CSV)', private_networking : boolean, backups_enabled: boolean}

// Show a Droplet
show(droplet_id, cb)

// Reboot a Droplet
reboot(droplet_id, cb)

// Power Cycle a Droplet
powerCycle(droplet_id, cb)

// Shut Down a Droplet
shutDown(droplet_id, cb)

// Power Off a Droplet
powerOff(droplet_id, cb)

// Power On a Droplet
powerOn(droplet_id, cb)

// Reset root password on a Droplet
passwordReset(droplet_id, cb)

// Resize a Droplet
resize(droplet_id, size, cb)

// Make a Snapshot of a Droplet
snapshot(droplet_id, name, cb)

// Restore a Droplet
restore(droplet_id, image_id, cb)

// Rebuild a Droplet
rebuild(droplet_id, image_id, cb)

// Rename a Droplet
rename(droplet_id, name, cb)

// Destroy a Droplet
destroy(droplet_id, scrub_data, cb)

```

### events

```js
// Listing Events
show(event_id, cb)
```

### images

```js
// Listing Images
list(filter, cb)

// Show an Image
show(image, cb)

// Destroy an Image
destroy(image, cb)

// Transfer an Image
transfer(image, region_id, cb)
```

### regions

```js
// Listing Regions
list(cb)
```

### sizes

```js
// Listing Sizes
list(cb)
```

### ssh_keys

```js
// Listing SSH_Keys
list(cb)

// Add a new SSH Key
new(name, ssh_pub_key, cb)

// Show a SSH Key
show(ssh_key_id, cb)

// Edit a SSH Key
edit(ssh_key_id, options, cb) // options = {name: 'string', ssh_pub_key: 'string'}

// Destroy a SSH Key
destroy(ssh_key_id, cb)
```



## Tests

`npm test`
todo: further client testing; nock reply data does not represent what DigitalOcean responds with in all cases, but is currently unused.

## License

MIT.
