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

}

TeacherSchema.loadClass(Teacher)

module.exports = TeacherSchema