const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      required: [true, 'post is required'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User is required'],
    },
    description: {
      type: String,
      required: [true, 'comment description is required'],
    },
  },
  {
    timeseries: true,
  },
);
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
