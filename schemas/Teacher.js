const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  TeacherSchema = Schema({
    name: String,
    phone: String,
    isDelete: {
      type: Boolean,
      default: false
    }
  });

class Teacher {
  static list(start = 0 , count = 10, query = '') {
    return this.find({name: {$regex: query}})
      .skip(start * count)
      .limit(count);
  }
  static getTotalCount(query) {
    return this.find({name: {$regex: query}})
      .count()
  }
}

TeacherSchema.loadClass(Teacher)

module.exports = TeacherSchema