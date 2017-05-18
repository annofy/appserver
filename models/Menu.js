const mongoose = require('mongoose'),
  MenuSchema = require('../schemas/Menu'),
  MenuModel = mongoose.model('Menu', MenuSchema);

module.exports = MenuSchema;