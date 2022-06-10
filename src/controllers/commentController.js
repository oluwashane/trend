const CommentService = require('../service/commentService')

class commentController {
  static comment = new CommentService();

  static async create(req, res) {
    try {
      const comment = await this.comment.createNewComment(req)
      res.status(200).json({
        success: true,
        comment,
        message: 'comment created successfully'
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
      const comment = await this.comment.getSingleComment(req)
      res.status(200).json({
        success: true,
        comment,
        message: 'comment successfully'
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        error,
        message: error.message
      })
    }
  }

  static async getCommentsOnUser(req, res) {
    try {
      const comments = await this.comment.getComments(req)
      res.status(200).json({
        success: true,
        comments,
        message: 'comment successfully'
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        error,
        message: error.message
      })
    }
  }

  static async getStat(req, res) {
    try {
      const {comments, mentions} = await this.comment.getCommentStats(req)
      res.status(200).json({
        success: true,
        comments,
        mentions,
        message: 'stats'
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
      const comment = await this.comment.updateComment(req)
      res.status(200).json({
        success: true,
        comment,
        message: 'comment updated successfully'
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
      const comment = await this.comment.deleteComment(req)
      res.status(200).json({
        success: true,
        comment,
        message: 'comment deleted successfully'
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

module.exports = commentController;
