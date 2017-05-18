const express = require('express'),
  app = express(),
  bodyParser = require('body-parser')
  routes = require('./routes'),
  config = require('config'),
  port = config.get('Customer.port'),
  debug = config.get('Customer.debug'),
  morgan = require('morgan'),
  path = require('path'),
  dbConfig = config.get('Customer.dbConfig'),
  mongoose = require('mongoose'),   // mongodb 数据库驱动
  newsService = require('./service/newsService');

if (debug) {
  app.use(morgan('combined'))
  console.log('[OK]', '调试配置成功');
} else {
  const fs = require('fs'),
    logsDir = path.join(__dirname, 'logs');
  fs.existsSync(logsDir) || fs.mkdirSync(logsDir)
  let accessLogStream = fs.createWriteStream(path.resolve(logsDir, 'access.log'), {flags: 'a'})
  app.use(morgan('combined', {stream: accessLogStream}))
}
mongoose.Promise = global.Promise

mongoose.connect(dbConfig.host + dbConfig.dbName, {
  reconnectTries: Number.MAX_VALUE
}).then(() => {
  console.log('[OK]', '数据库连接成功.')
}).catch(err => {
  console.log('[ERROR]', '重新连接中...')
})

Promise.all([
  newsService.requestNews()
]).then(() => {
  console.log('[OK]', '信息服务正在执行中')
}).catch(err => {

})

// 设置中间件
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

routes(app)

app.listen(port || Process.env.PORT, (err) => {
  if (!err) {
    console.log('[OK]', 'app run on port :' + port)
  } else {
    console.log('[ERROR]', 'app run fail, err: ' + err)
  }
})

