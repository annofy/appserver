const schedule = require('node-schedule'),
  mailService = require('./mailService'),
  utils = require('../utils/utils'),
  News = require('../models/News'),
  NewsContent = require('../models/NewsContent');

/** node-schedule * 代表
 *    *    *    *    *    *
 ┬    ┬    ┬    ┬    ┬    ┬
 │    │    │    │    │    |
 │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
 │    │    │    │    └───── month (1 - 12)
 │    │    │    └────────── day of month (1 - 31)
 │    │    └─────────────── hour (0 - 23)
 │    └──────────────────── minute (0 - 59)
 └───────────────────────── second (0 - 59, OPTIONAL)

 每分钟的第30秒触发： '30 * * * * *'

 每小时的1分30秒触发 ：'30 1 * * * *'

 每天的凌晨1点1分30秒触发 ：'30 1 1 * * *'

 每月的1日1点1分30秒触发 ：'30 1 1 1 * *'

 2016年的1月1日1点1分30秒触发 ：'30 1 1 1 2017 *'

 每周1的1点1分30秒触发 ：'30 1 1 * * 1'
 */

module.exports = {
  requestNews: function () {
    console.log('[OK]', '开始执行信息获取服务')
    // 每天中午12:00:00 获取校园网信息
    schedule.scheduleJob('0 0 12 * * *', async function () {
      let news = utils.getNewsList(),
        newMsgs = []
      await news.forEach(item => {
        if (!News.getNewsById(item._id)) {
          newsMsg.push(item)
        }
      })
      if (newMsgs) {
        News.create(newMsgs)
          .then(news => {
            console.log('[OK]', '开始给超级管理员发送邮件')
            let content = '<ul>'
            content += testData.map(cv => `<li><a href="${cv.href}" style="display: block; padding: 10px">${ '[' + cv._id + ']' + cv.title}</a></li>`)
            content += '</ul>'
            mailService.sendMailToAdmin('抓取校园网信息通知邮件', '定时任务新消息提示', content)
            // 执行获取内容操作
            Promise.all(news.map(item => utils.getNewsDetail(item.id, item.hash)))
              .then(contents => {
                NewsContent.create(contents)
              })
              .catch(err => {
                mailService.sendMailToAdmin('抓取校园网信息通知邮件', '获取条目信息失败', err)
              })
          })
      }
    })

  }
}
