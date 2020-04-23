const crypto = require('crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
const key = crypto.scryptSync(password, 'salt',24);
const dechiper = crypto.createDecipher(algorithm, key);

let decrypted = '';
dechiper.on('readable', ()=>{
    while (null !==(chunk = dechiper.read())) {
        decrypted += chunk.toString('utf8');
    }
});

dechiper.on('end',()=>console.log(decrypted));

const encrypted = 'baa6bdb9b4c7686f06a9fca4625f7be64efea37989008acd3043368a0bf38b10';
dechiper.write(encrypted, 'hex');
dechiper.end();