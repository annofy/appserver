const mongoose = require('mongoose'),
  GraduationSchema = require('../schemas/Gradution'),
  Graduation = mongoose.model('Gradution', GraduationSchema);

module.exports = Graduation;