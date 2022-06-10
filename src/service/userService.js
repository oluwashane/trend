const User = require('../models/userModel');

class UserService {
  async createNewUser(req) {
    const user = new User(req.body);
    await user.save();
    return user;
  }

  async getSingleUser(req) {
    const userId = req.params.id;
    const findUser = await User.findById(userId);
    if (!findUser) {
      throw new Error("User does not exist")
    }
    return findUser;
  }

  async updateUser(req) {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["contact", "profilePictureUrl"];
    const isValid = updates.every((update) => {
        return allowedUpdates.includes(update);
    })

    if (!isValid) {
      throw new Error("Invalid update")
    }

    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    return user
  }

  async deleteUser(req) {
    const removedUser = await User.findByIdAndDelete(req.params.id);
    return removedUser
  }
}

module.exports = UserService
