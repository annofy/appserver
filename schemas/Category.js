const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  CategorySchema = Schema({
    _id: Number,
    name: String,
    desc: String,
    isDelete: {
      type: Boolean,
      default: false
    }
  });

class Category {

}

CategorySchema.loadClass(Category)
CategorySchema.index({ _id: 1}) // 按照_id 升序排列

module.exports = CategorySchema