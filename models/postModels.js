//SETTING UP LIBRARIES
const mongoose = require('mongoose');

//CREATING SCHEMA FOR EACH POST (PARAMTERS/TEMPLATE)
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  tags: {
    type: [String]
  },
  image: {
    type: String
  },
  altText: {
    type: String
  },
  link: {
    type: String
  },
  comments: {
    type: [[String]]
  },
  createdAt: {
    type: Date
  }
});

module.exports = Post = mongoose.model('post', postSchema);