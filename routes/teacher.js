let express = require('express'),
  router = express.Router(),
  utils = require('../utils/utils')
  Teacher = require('../models/Teacher')
  mailService = require('../service/mailService');

router.get('/', (req, res) => {
  let teachers = [
    {name: '向郑涛', phone: '13283892292'},
    {name: '黄连丽', phone: '13283892292'},
    {name: '唐海', phone: '13283892292'},
    {name: '付勇志', phone: '13283892292'},
    {name: '胡宁亚', phone: '13283892292'},
    {name: '杨亚会', phone: '13283892292'},
  ]
  Teacher.create(teachers)
    .then(ts => {
      res.json(ts)
    })
})

module.exports = router;