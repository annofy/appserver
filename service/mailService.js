const utils = require('../utils/utils'),
  utilsCrypto = require('../utils/utilsCrypto')
config = require('config');


module.exports = {
  sendMailToAdmin: async function (subject, title, content) {
    let emailConfig = {
      user: await config.get('Customer.user'),
      pass: await config.get('Customer.pass'),
      name: await config.get('Customer.username')
    }
    let from = Object.assign({}, emailConfig),
      to = {email: 'zhenglfsir@gmail.com'},
      body = {subject, text: title, html: content};
    utils.sendMail(from, to, body)
  }
}