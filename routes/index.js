module.exports =app => {
  app.get('/', (req, res) => {
    res.json({
      success: true,
      data: {},
      reason: '请求成功',
      echo: '',
      errno: ''
    })
  })

  app.use('/home', require('./home'))
  app.use('/newslist', require('./newslist'))
  app.use('/nears', require('./nears'))
  app.use('/discuss', require('./discuss'))
  app.use('/teacher', require('./teacher'))
  app.use('/comments', require('./comments'))
  app.use('/donate', require('./donate'))
  app.use('/admin', require('./admin'))

  app.use((req, res) => {
    if(!res.headersSent) {
      res.json({
        success: false,
        data: {},
        reason: '请求地址有误',
      })
    }
  })
}