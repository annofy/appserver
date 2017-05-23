const mongoose = require('mongoose'),
  DonateSchema = require('../schemas/Donate'),
  DonateModel = mongoose.model('Donate', DonateSchema);

module.exports = DonateModel;

