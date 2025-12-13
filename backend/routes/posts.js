const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a post
router.post('/', async (req, res) => {
  if (req.headers['x-admin-password'] !== process.env.ADMIN_PASSWORD) {
    return res.status(403).json({ message: 'Invalid password' });
  }

  const post = new Post({
    title: req.body.title,
    excerpt: req.body.excerpt,
    content: req.body.content,
    category: req.body.category,
    image: req.body.image,
    readTime: req.body.readTime,
    author: req.body.author,
    tags: req.body.tags
  });

  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update post
router.put('/:id', async (req, res) => {
  try {
    if (req.headers['x-admin-password'] !== process.env.ADMIN_PASSWORD) {
      return res.status(403).json({ message: 'Invalid password' });
    }

    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add comment
router.post('/:id/comments', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.comments.push(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete post
router.delete('/:id', async (req, res) => {
  try {
    if (req.headers['x-admin-password'] !== process.env.ADMIN_PASSWORD) {
      return res.status(403).json({ message: 'Invalid password' });
    }

    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;