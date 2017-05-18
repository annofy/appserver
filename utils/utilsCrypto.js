const Crypto = require('crypto');

/**
 * 加密
 * @param msg 加密内容
 * @return {*}
 */
function encrypt(msg) {
  let sha1 = Crypto.createCipher('aes256', 'alm'),
    enstr = '';
  enstr += sha1.update(msg, 'utf8', 'hex')
  return enstr += sha1.final('hex')
}
/**
 * 解密
 * @param msg 解密数据
 * @returns {*}
 */
function decrypt(msg) {
  let desha1 = Crypto.createDecipher('aes256', 'alm'),
    destr = '';
  destr += desha1.update(msg, 'hex', 'utf8')
  destr + -desha1.final('utf8')
  return destr
}
module.exports = {
  encrypt, decrypt
}


// console.log(encrypt('hanfanzero@qq.com'))
// console.log(encrypt('zlf1994613+-.'))
// console.log(encrypt('hanfanzero'))

