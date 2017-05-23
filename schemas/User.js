const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  uitlsCrypto = require('../utils/utilsCrypto'),
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
    pwd: String,
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

  static updateUser(id, info) {
    return this.update({_id: id}, info)
  }

  static updatePass(id, pass) {
    pass = uitlsCrypto.encrypt(pass)
    return this.update({_id: id}, {pwd: pass})
  }

  static add(user) {
    return this.create(user)
  }
}

UserSchemas.loadClass(User)
UserSchemas.pre('save', next => {
  this.meta = {
    createAt: Date.now(),
    updateAt: Date.now()
  }
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt;
  } else {
    this.meta.updateAt = Date.now()
  }
  next()
})


module.exports = UserSchemas