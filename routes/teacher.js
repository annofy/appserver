let express = require('express'),
  router = express.Router(),
  utils = require('../utils/utils')
  Teacher = require('../models/Teacher')
  mailService = require('../service/mailService');

router.post('/', (req, res) => {
  // let teachers = [
  //   {name: '向郑涛', phone: '13283892292'},
  //   {name: '黄连丽', phone: '13283892292'},
  //   {name: '唐海', phone: '13283892292'},
  //   {name: '付勇志', phone: '13283892292'},
  //   {name: '胡宁亚', phone: '13283892292'},
  //   {name: '杨亚会', phone: '13283892292'},
  // ]
  let start = req.body.start || 0,
    count = req.body.count || 10,
    query = req.body.query || '';

  console.log(query)

  Promise.all([
    Teacher.list(start, count, query),
    Teacher.getTotalCount(query)
  ]).then(result => {
    utils.success(res, {
      count: result[1],
      teachers: result[0],
      pageCount: result[1] % 10 === 0 ? result[1] / 10 : parseInt(result[1] / 10) + 1
    })
  })
})

router.post('/save', (req, res) => {
  Teacher.create(teachers)
    .then(ts => {
      utils.success(res, ts)
    })
})

module.exports = router;