let express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  res.json({
    success: true,
    data: {
      id: 1,
      name: 'longfan.zheng',
      locationProvince: '浙江',
      locationCity: '杭州',
      company: 'web研究所'
    },
    reason: '请求成功',
    echo: '',
    errno: ''
  })
})

router.get('/info/:id', (req, res) => {
  console.log('[params]', req.params.id)
  res.json({
    success: true,
    data: {
      id: 1,
      name: 'longfan.zheng',
      phone: '18372627060',
      locationProvince: '浙江',
      locationCity: '杭州',
      company: 'web研究所',
      industry: 'IT/计算机',
      graduation: '13级计算机系'
    },
    reason: '请求成功',
  })
})

router.post('/info', (req, res) => {
  
})


module.exports = router