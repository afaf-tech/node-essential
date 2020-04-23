const crypto = require('crypto')

const hash = crypto.createHash('md5')
    .update('password')
    .digest('hex');

    console.log(hash);
    
const secretKey = 'secret key';
const secretmd5 = crypto.createHmac('sha256', secretKey)
    .update('password')
    .digest('hex')


console.log(secretmd5);
    