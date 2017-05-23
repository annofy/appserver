const express = require('express'),
  router = express.Router(),
  Donate = require('../models/Donate'),
  utils = require('../utils/utils');


router.post('/', (req, res) => {
  let start = req.body.start || 0,
    count = req.body.count || 10,
    query = req.body.query || '';
  Promise.all([
    Donate.list(start, count , query),
    Donate.getTotalCount(query),
    Donate.getTotalMoney()
  ]).then(result => {
    utils.success(res, {
      list: result[0],
      count: result[1],
      total: result[2],
      pageCount: result[1] % 10 === 0 ? result[1]/ 10 : parseInt(result[1]/10) + 1
    })
  })
})


module.exports = router;