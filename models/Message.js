const mongoose = require('mongoose'),
  MessageSchema = require('../schemas/Message'),
  MessageModel = mongoose.model('Message', MessageSchema);

module.exports = MessageSchema;

