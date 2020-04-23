const dns = require('dns');

// dns.lookup()
// dns.resolve()
try {
    dns.lookup('juniordevelopercentra.com', (err,value) => {
        console.log(value);
    });
} catch (error) {
    console.log(error);
    
}