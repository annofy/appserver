const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  GradutionSchema = Schema({
    _id: {
      type: Number,
      default: 0,
    },
    desc: String,
    level: Number,
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

class Gradution {
  static save(users) {
    return this.create(users)
  }

  static gradutionList() {
    return this.find()
  }
}

GradutionSchema.loadClass(Gradution)

GradutionSchema.pre('save', next => {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt;
  }
  next()
})

module.exports = GradutionSchema
