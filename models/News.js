const mongoose = require('mongoose'),
  NewsSchemas = require('../schemas/News'),
  NewsModel = mongoose.model('News', NewsSchemas);

module.exports = NewsModel;