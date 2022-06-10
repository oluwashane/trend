const { Schema, model } = require('mongoose');
const validator = require('validator');
const ContactSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    lowercase: true,
    required: true
  },
  lastName: {
    type: String,
    trim: true,
    lowercase: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: false,
    validate: {
      validator: function(v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email"
    },
    required: [true, "Email required"]
  },
})

const UserSchema = new Schema({
  _id: Number,
  profilePictureUrl: {
    type:String
  },
  contact: {
    type: ContactSchema,
    require: true
  },
  username: {
    type: String,
    trim: true,
    required: true
  },
  updatedAt: Date
}, {
  _id: false
})

UserSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    ret.id = ret._id,
    delete ret._id,
    delete ret.__v
  }
})

const User = model('User', UserSchema)

module.exports = User;
