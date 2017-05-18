const mongoose = require('mongoose'),
  NewsContentSchemas = require('../schemas/NewsContent'),
  NewsContentModel = mongoose.model('NewsContent', NewsContentSchemas);

module.exports = NewsContentModel