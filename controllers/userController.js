const User = require('../models/user');

// Create a user
exports.createUser = async (req, res) => {
  const { name, mobile, address } = req.body;
  try {
    const user = await User.create({ name, mobile, address });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
