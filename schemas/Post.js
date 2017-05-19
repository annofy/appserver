const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  PostSchema = Schema({
    title: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    category: {
      type: Number,
      ref: 'Category'
    },
    content: String,
    uris: Array,
    meta: {
      createAt: {
        type: Date,
        default: Date.now
      },
      updateAt: {
        type: Date,
        default: Date.now
      }
    },
    messages: [{
      type: Schema.Types.ObjectId,
      ref: 'Message'
    }],
    isDelete: {
      type: Boolean,
      default: false
    }
  });

class Post {

}

PostSchema.loadClass(Post)
PostSchema.pre('save', next => {
  if(this.isNew) {
    this.meta.createAt = this.meta.updateAt
  } else {
    this.meta.updateAt = Date.now()
  }
  next()
})
PostSchema.index({ _id: 1})


module.exports = PostSchema;