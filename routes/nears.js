const express = require('express'),
  router = express.Router(),
  cityData = require('../data/cityCode.json');

const nearsUser = [
  {
    id: 1,
    name: 'longfan.zheng',
    email: 'zhenglfsir@gmail.com',
    pic: 'http://ojgquc007.bkt.clouddn.com/IMG20170115195026.jpg',
    lastLogin: '2017-5-15',
    cityCode: '179'
  },
  {
    id: 2,
    name: 'peng.zhu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '179'
  },
  {
    id: 3,
    name: 'ys',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '179'
  },
  {
    id: 4,
    name: 'ww',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '179'
  },
  {
    id: 6,
    name: 'tx',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '179'
  },
  {
    id: 7,
    name: 'wct',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '179'
  },
  {
    id: 8,
    name: 'll',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '179'
  },
  {
    id: 9,
    name: 'ss',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '179'
  },
  {
    id: 10,
    name: 'uu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '179'
  },
  {
    id: 11,
    name: 'pp',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '179'
  },
  {
    id: 12,
    name: 'vv',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '179'
  },
  {
    id: 13,
    name: 'sds',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '179'
  },
  {
    id: 14,
    name: 'eiow',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '179'
  },
  {
    id: 15,
    name: 'ljwe',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '218'
  },
  {
    id: 16,
    name: 'we12',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '218'
  },
  {
    id: 17,
    name: 'sld',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '218'
  },
  {
    id: 18,
    name: 'weroo',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '218'
  },
  {
    id: 19,
    name: 'ppwe',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '218'
  },
  {
    id: 20,
    name: 'dlsl',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '218'
  },
  {
    id: 21,
    name: 'zhu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '218'
  },
  {
    id: 22,
    name: 'pengsszhu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '218'
  },
  {
    id: 23,
    name: 'pengldfszhu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '218'
  },
  {
    id: 24,
    name: 'pengdslzhu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '218'
  },
  {
    id: 26,
    name: 'penfdsfdslzhu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '218'
  },
  {
    id: 29,
    name: 'penzhu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '216'
  },
  {
    id: 30,
    name: 'penhu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '216'
  },
  {
    id: 31,
    name: 'pehu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '216'
  },
  {
    id: 32,
    name: 'penhu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '216'
  },
  {
    id: 33,
    name: 'peu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '216'
  },
  {
    id: 34,
    name: 'pexxxjg.zhu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '216'
  },
  {
    id: 35,
    name: 'pengdlslzhu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '216'
  },
  {
    id: 36,
    name: 'peng23ldhu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '216'
  },
  {
    id: 37,
    name: 'pengdllhu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '180'
  },
  {
    id: 38,
    name: 'peng00zhu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '180'
  },
  {
    id: 39,
    name: 'peng23zhu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '180'
  },
  {
    id: 40,
    name: 'peng323hu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '180'
  },
  {
    id: 41,
    name: 'peng20hu',
    email: 'zheng@qq.com',
    pic: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
    lastLogin: '2017-5-27',
    cityCode: '180'
  },
]

router.get('/', async (req, res) => {
  let cityCode = req.query.cityCode,
    userList = [], city = null;
  if (!cityCode) {
    city = req.query.city
    console.log(req.query.city)
    cityObj = await cityData.filter(cv => cv['name'].indexOf(city) !== -1)
    cityCode = cityObj[0]? cityObj[0].code : 0
  }
  await nearsUser.map(cv => {
    if (cv.cityCode === cityCode) {
      userList.push(cv)
    }
  })

  if(userList.length === 0) {
    userList = [
      {
        id: 1,
        name: 'longfan.zheng',
        email: 'zhenglfsir@gmail.com',
        pic: 'http://ojgquc007.bkt.clouddn.com/IMG20170115195026.jpg',
        lastLogin: '2017-5-15',
        cityCode: '179'
      },
    ]
  }

  res.json({
    success: true,
    data: {
      userList,
      count: userList.length
    },
    reason: '附近的小伙伴都找出来咯'
  })
})


module.exports = router;