const mongoose = require('mongoose'),
  CategorySchema = require('../schemas/Category'),
  CategoryModel = mongoose.model('Category', CategorySchema);

module.exports = CategoryModel;

