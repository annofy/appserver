const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  NewsSchema = new Schema({
    title: String,
    hash: String,
    url: String,
    _id: Number,
  });

class News {

  static getNewsList() {
    return this.find();
  }

  static getNewsById(id) {
    return this.findOne({_id: id})
      .populate('')

  }

}
NewsSchema.loadClass(News)
NewsSchema.pre('save', next => {
  console.log('[save]', '正在进行保存操作')
  next()
})

NewsSchema.pre('findOne', next => {
  console.log('[findOne]', '查找单个操作')
  next()
})

module.exports = NewsSchema;