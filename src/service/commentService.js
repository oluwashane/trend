const Comment = require('../models/commentModel');

class CommentService {
  async createNewComment(req) {
    const comment = new Comment(req.body);
    await comment.save();
    return comment;
  }

  async getSingleComment(req) {
    const commentId = req.params.id;
    const findComment = await Comment.findById(commentId);
    return findComment;
  }

  async getCommentStats(req) {
    const commentsStat = await Comment.aggregate([
      { $unwind: "$hashTags" },
      {
        $group: {
          _id: "$hashTags",
          count: {
            "$sum": 1
          }
        }
      },
      {$sort: {
        count: -1
      }},
      {$limit: 10},
    ])

    const mentionsStat = await Comment.aggregate([
      { $unwind: "$mentions" },
      {
        $group: {
          _id: "$mentions",
          count: {
            "$sum": 1
          }
        }
      },
      {$sort: {
        count: -1
      }},
      {$limit: 10},
    ])

    
    return {
      comments: commentsStat,
      mentions: mentionsStat
    }
  }

  async getComments(req) {
    const userId = req.params.userId;
    const findComment = await Comment.find({ userId }).populate({
      path:'userId',
      match: {
        _id: userId,
      },
      select: 'contact'
    })
    .exec();
    return findComment;
  }

  async updateComment(req) {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["hashTags", "mentions", "text"];
    const isValid = updates.every((update) => {
        return allowedUpdates.includes(update);
    })

    if (!isValid) {
      throw new Error("Invalid update")
    }

    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body);
    return comment
  }

  async deleteComment(req) {
    const removedComment = await Comment.findByIdAndDelete(req.params.id);
    return removedComment
  }
}

module.exports = CommentService
