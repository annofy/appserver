const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  MessageSchema = Schema({
    postId: {
      type: Schema.Types.ObjectId,
    },
    from: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    to: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    content: String,
    meta: {
      createAt: {
        type: 'Date',
        default: Date.now
      },
      updateAt: {
        type: 'Date',
        default: Date.now
      }
    }
  });

class Message {

  static getListMsg(start=0, count=10, criteria='') {
    return this.find({content: {$regex: criteria}})
      .skip(start * count)
      .limit(count)
      .sort('meta.createAt')
      .exec()
  }

  static getTotalCount(criteria='') {
    return this.find({content: {$regex: criteria}})
      .count()
  }

}

MessageSchema.pre('save', next => {
  if(this.isNew) {
    this.meta.createAt = this.meta.updateAt
  } else {
    this.meta.updateAt = Date.now()
  }
  next()
})

MessageSchema.index({ meta: { }})

module.exports = MessageSchema;