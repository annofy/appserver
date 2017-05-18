let express = require('express'),
  router = express.Router(),
  util = require('../utils/utils'),
  News = require('../models/News'),
  NewsContent = require('../models/NewsContent');


router.get('/', (req, res) => {
  let start = req.query.start || 0,
    count = req.query.count || 10,
    criteria = req.query.criteria || '';
  Promise.all([
    News.getNewsList(start, count, criteria),
    News.getTotalCount(criteria)
  ]).then(result => {
    res.json({
      success: true,
      data: {
        count: result[1],
        newsList: result[0]
      },
      reason: '获取信息成功'
    })
  }).catch(err => {
    res.json({
      success: false,
      data: {},
      reason: '获取信息失败'
    })
  })
})

router.get('/:id', (req, res) => {
  let id = req.params.id,
    hash = req.query.hash;
  console.log(id, hash)
  util.getNewsDetail(id, hash)
    .then(data => {
      res.json({
        success: true,
        data: data,
        reason: '获取新闻详情成功'
      })
    })
    .catch(err => {
      res.json({
        success: false,
        data: {},
        reason: '获取新闻详情失败'
      })
    })
})


module.exports = router
