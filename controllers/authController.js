const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const password_hash = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({ name, email, password_hash });
    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET, { expiresIn: '100h' });
    res.status(200).json({ message: 'Logged in', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
