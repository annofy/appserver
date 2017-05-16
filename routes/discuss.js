const express = require('express'),
  router = express.Router(),
  utils = require('../utils/utils');


router.get('/', (req, res) => {
  let typeId = req.query.typeId;
  res.json({
    success: true,
    data: {},
    reason: '拉取到新的评论'
  })
})

router.get('/mail', (req, res) => {
  utils.sendMail({
      user: 'hanfanzero@qq.com',
      pass: 'zhwmielfbweieaeb',
      name: 'hanfanzero'
    }, {email: 'hangjj@qq.com'}
    , {
      subject: '系统通知',
      text: 'Welcome You',
      html: '<a href="https://zhenglongfan.blogspot.hk">点击这里，完成登录</a>'
    })
    .then(res => {
      res.json(res)
    }).catch(err => {
    res.json(err)
  })
})


module.exports = router;
