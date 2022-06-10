const { Schema, model } = require('mongoose');
const validator = require('validator');
const User = require('./userModel');

const CommentSchema = new Schema({
  _id: Number,
  hashTags:[String],
  mentions: [String],
  text: {
    type: String,
    trim: true,
    required: true,
  },
  userId: {
   type: Number,
   ref: User 
  },
  timestamp: Date
}, {
  _id: false
})

CommentSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    ret.id = ret._id,
    delete ret._id,
    delete ret.__v
  }
})

const Comment = model('Comment', CommentSchema)

module.exports = Comment;
