const express = require('express');
const {
  getAllPosts,
  createPost,
  getUserPosts,
  editPost,
  deletePost,
} = require('../controllers/postController');
const router = express.Router();

router.get('/posts', getAllPosts);
router.post('/posts', createPost);
router.get('/users/:userId/posts', getUserPosts);
router.put('/posts/:id', editPost);
router.delete('/posts/:id', deletePost);

module.exports = router;
