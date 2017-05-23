/**
 * Created by zhenglongfan on 2017/5/23.
 */
const express = require('express'),
  router = express.Router(),
  utils = require('../utils/utils');

router.post('/', (req, res) => {
  console.log(req.body)
})


module.exports =  router;
