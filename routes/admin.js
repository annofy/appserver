const express = require('express'),
  router = express.Router(),
  utils = require('../utils/utils'),
  News = require('../models/News');

router.post('/news', utils.checkAdminLogin, (req, res, next) => {
  let start = req.body.currentPage,
    count = req.body.pageCount,
    criteria = req.body.title;
  console.log(start, count, criteria)
  Promise.all([
    News.getNewsList(start, count, criteria),
    News.getTotalCount(criteria)
  ]).then(result => {
      utils.success(res, {
        list: result[0],
        count: result[1]
      })
      next()
    })
    .catch(err => {
      console.log(err)
      utils.error(res, '请求失败')
    })
})


module.exports = router;