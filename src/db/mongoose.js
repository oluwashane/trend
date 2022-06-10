const mongoose = require('mongoose');
const Comment = require('../models/commentModel');
const User = require('../models/userModel');
const commentData = require('../utils/comments.json');
const userData = require('../utils/users.json');

(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/social', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4  
    });
    console.log("database connected...");

    // seed data
    await Comment.deleteMany(); 
    await User.deleteMany(); 

    // removing all previous data (if any) (Never use this in production)
    /**
     * @todo run the insertMany only in development state
     */
    await Comment.insertMany(commentData);
    await User.insertMany(userData);
  } catch (error) {
    console.log(error);
  }
})();