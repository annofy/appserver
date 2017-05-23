const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  DonateSchema = Schema({
    type: String,
    money: Number,
    name: String,
    time: {
      type: Date,
      default: Date.now
    }
  });

class Donate {
  static list(start = 0, count = 10, query = '') {
    return this.find({name: {$regex: query}})
      .skip(start * count)
      .limit(count)
  }

  static getTotalCount(query) {
    return this.find({name: {$regex: query}})
      .count()
  }

  static getTotalMoney() {
    return new Promise((resolve, reject) => {
      this.find()
        .then(list => {
          let total = list.reduce((total, cv) => total += cv.money, 0)
          console.log('total', total)
          resolve(total)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

DonateSchema.loadClass(Donate)

module.exports = DonateSchema