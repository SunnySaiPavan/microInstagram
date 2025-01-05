const Post = require('../models/post');
const User = require('../models/user');

// Get all posts of a specific user
exports.getUserPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({ where: { userId: req.params.userId } });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Edit a post
exports.editPost = async (req, res) => {
  const { title, description, images } = req.body;
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    post.title = title || post.title;
    post.description = description || post.description;
    post.images = images || post.images;
    await post.save();

    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a post
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    const user = await User.findByPk(post.userId);
    if (user) {
      user.postCount = Math.max(user.postCount - 1, 0);
      await user.save();
    }

    await post.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
