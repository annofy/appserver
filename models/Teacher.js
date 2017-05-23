const mongoose = require('mongoose'),
  TeacherSchemas = require('../schemas/Teacher'),
  TeacherModel = mongoose.model('Teacher', TeacherSchemas);

module.exports = TeacherModel;