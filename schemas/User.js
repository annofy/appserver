const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  UserSchemas = Schema({
    name: String,
    locationProvince: String,
    locationCity: String,
    phone: String,
    industry: String,
    graduation: {
      type: Number,
      ref: 'Gradution'
    },
    authCode: String,
    email: String,
    isDelete: {
      type: Boolean,
      default: false
    },
    meta: {
      createAt: {
        type: Date,
        default: Date.now
      },
      updateAt: {
        type: Date,
        default: Date.now
      }
    }
  });

class User {
  static getUserById(id) {
    return this.findOne({_id: id})
      .populate('graduation')
      .exec()
  }

  static getList(start = 0, count = 10) {
    return this.find()
      .skip(start * count)
      .limit(count)
  }

  static updateEmail(id, email, authCode) {
    let criteria = {_id: id}
    return this.update(criteria, {email, authCode})
  }
}

UserSchemas.loadClass(User)
UserSchemas.pre('save', next => {
  console.log('update')
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt;
  }
  next()
})


module.exports = UserSchemas