let request = require('request'),
  rp = require('request-promise-native'),
  cheerio = require('cheerio'),
  config = require('config'),
  newsUrl = config.get('Customer.newsUrl'),
  xxyw = config.get('Customer.xxyw'),
  mtqy = config.get('Customer.mtqy'),
  rpOptions = {transform: body => cheerio.load(body)},
  nodemailer = require('nodemailer');

async function getNewsList(type) {
  let result = {}
  rpOptions.uri = newsUrl
  if (type === 'mtqy') {
    rpOptions.uri += mtqy
  } else {
    rpOptions.uri += xxyw
  }
  await rp(rpOptions)
    .then($ => {
      let alist = $('a.c55197'),
        newsList = [];
      Object.keys(alist).map(cv => {
        if (!isNaN(cv)) {
          let item = alist.eq(cv),
            _id = Number(item.attr('href').split('/')[2].split('.')[0]),
            title = item.attr('title'),
            url = newsUrl + '/' + item.attr('href'),
            hash = item.attr('href');
          newsList.push({_id, title, url, hash})
        }
      })
      result = newsList
    }).catch(err => {
      throw new Error('获取信息异常:' + err)
    })

  return result
}

async function getNewsDetail(id, hash) {
  rpOptions.uri = newsUrl + '/' + hash
  let data = null
  await rp(rpOptions).then($ => {
    let headeInfo = $('.mmm123').next().text().split(/：|\s+/),
      title = $('.table333').text(),
      author = [headeInfo[1], headeInfo[9]],
      time = headeInfo[6] + ' ' + headeInfo[7],
      content = $('#vsb_content_2').text(),
      imgs = $('.vsbcontent_img img'),
      uris = [];
    Object.keys(imgs).forEach(index => {
      if (!isNaN(index)) {
        uris.push(newsUrl + imgs.eq(index).attr('src').split('../..')[1])
      }
    })
    data = {author, time, content, uris, title, tid: id}

  }).catch(err => {
    throw new Error('获取新闻失败')
  })
  return data
}

function sendMail(from, to, body) {
  let transporter = nodemailer.createTransport({
      service: '163',
      auth: {
        user: from.user,
        pass: from.pass
      }
    }),
    mailOptions = {
      from: from.name, // sender address
      to: to.email, // list of receivers
      subject: body.subject, // Subject line
      text: body.text, // plaintext body
      html: body.html // html body
    };
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error)
      } else {
        console.log('[OK]', '发送邮件成功')
        resolve(info)
      }
    })
  })

}

function success(res, data) {
  res.json({
    success: true,
    data,
    reason: '操作成功'
  })
}

function error(res, reason) {
  res.json({
    success: false,
    data: {},
    reason
  })
}

function checkAdminLogin(req, req, next) {
  console.log('[auth]', '假装已经授权管理员了')
  next()
}

module.exports = {
  getNewsList, getNewsDetail, sendMail, success, error,
  checkAdminLogin
}