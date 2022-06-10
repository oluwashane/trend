const UserService = require('../service/userService')

class UserController {
  static user = new UserService();

  static async create(req, res) {
    try {
      const user = await this.user.createNewUser(req)
      res.status(201).json({
        success: true,
        user,
        message: 'User created successfully'
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        error,
        message: error.message
      })
    }
  }

  static async read(req, res) {
    try {
      const user = await this.user.getSingleUser(req)
      res.status(200).json({
        success: true,
        user,
        message: 'User successfully'
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        error,
        message: error.message
      })
    }
  }

  static async update(req, res) {
    try {
      const user = await this.user.updateUser(req)
      res.status(200).json({
        success: true,
        user,
        message: 'User updated successfully'
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        error,
        message: error.message
      })
    }
  }

  static async delete(req, res) {
    try {
      const user = await this.user.deleteUser(req)
      res.status(200).json({
        success: true,
        user,
        message: 'User deleted successfully'
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        error,
        message: error.message
      })
    }
  }

}

module.exports = UserController;
