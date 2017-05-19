const mongoose = require('mongoose'),
  PostSchema = require('../schemas/Post'),
  PostModel = mongoose.model('Post', PostModel);

module.exports = PostModel;

