let express = require('express'),
  router = express.Router(),

  util = require('../utils/utils');


router.get('/', (req, res) => {
  util.getNewsList()
    .then(newsList => {
      res.json({
        success: true,
        data: {
          count: newsList.length,
          newsList: newsList
        },
        reason: '获取信息成功'
      })
    })
    .catch(err => {
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
