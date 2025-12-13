const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  readTime: { type: String, default: '5 min read' },
  author: { type: String, default: 'Admin' },
  tags: [String],
  comments: [{
    author: String,
    content: String,
    createdAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);