const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  NewsContentSchemas = Schema({
    tid: Number,
    title: String,
    author: Array,
    time: String,
    content: String,
    uris: Array
  });

class NewsContent {

  static getNewsContentById(tid) {
    return this.findOne({tid})
  }
}

NewsContentSchemas.loadClass(NewsContent)
NewsContentSchemas.pre('save', next => {
  console.log('[save content]', '正在进行新闻内容保存')
  next()
})

module.exports = NewsContentSchemas