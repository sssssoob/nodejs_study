const util = require('util');
const crypto = require('crypto');

const dontUseMe =  util.deprecate( (x,y) => {
    console.log(x+y);
}, '사용 금지');

dontUseMe();

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
    .then( (buf) => {
        console.log(buf.toString('base64'));
    })
    .catch( (error) => {
        console.error(error);
    });


