const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'post title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'post description is required'],
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Post category is required'],
      },
    ],
    numViews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    disLikes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'Please Author is required'],
      },
    ],
    photo: {
      type: String,
      required: [true, 'post Image required'],
    },
  },
  {
    timeseries: true,
  },
);
const Post=mongoose.model("Post",PostSchema)
module.exports=Post