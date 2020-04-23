
const crypto = require('crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
const key = crypto.scryptSync(password, 'salt', 24); // 24 = the length of the key we want to generate
const chiper = crypto.createCipher(algorithm, key);

// chiper = sandi
let encrypted = '';
chiper.on('readable', ()=>{
    let chunk;
    while (null !== (chunk = chiper.read())) {
        encrypted += chunk.toString('hex');
    }
});

chiper.on('end', () => console.log(encrypted));

chiper.write('some clear text data');
chiper.end();