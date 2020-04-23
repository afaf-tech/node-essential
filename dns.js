const dns = require('dns');

// dns.lookup()
// dns.resolve()

dns.reverse('8.8.8.8', (err,value) => {
    if(err) {
        console.log(err);
        return;
    }

    console.log(value);
})