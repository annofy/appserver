const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  MenuSchema = Schema({
    _id: {
      type: Number,
      default: 0
    },
    order: Number,
    children: [{
      type: Array,
      ref: 'Menu'
    }],
    url: String,
    name: String,
    parent: {
      type: Number,
      default: undefined
    }
  });

class Menu {

  static getList() {
    return this.find().populate('children')
      .populate('parent')
      .exec()
  }

}

MenuSchema.loadClass(Menu)

module.exports = MenuSchema