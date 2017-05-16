let express = require('express'),
  app = express(),
  routes = require('./routes'),
  config = require('config'),
  port = config.get('Customer.port'),
  debug = config.get('Customer.debug'),
  morgan = require('morgan'),
  path = require('path'),
  fs = require('fs'),
  logsDir = path.join(__dirname, 'logs');

if (debug) {
  app.use(morgan('combined'))
}


fs.existsSync(logsDir) || fs.mkdirSync(logsDir)
let accessLogStream = fs.createWriteStream(path.resolve(logsDir, 'access.log'), {flags: 'a'})
app.use(morgan('combined',{stream: accessLogStream}))

routes(app)

app.listen(port || Process.env.PORT, (err) => {
  if (!err) {
    console.log('[OK]', ' app.js run on port :' + port)
  } else {
    console.log('[FAIL]', 'app.js run fail, err: ' + err)
  }
})

