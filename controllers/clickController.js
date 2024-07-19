const { Click } = require('../models');
const { v4: uuidv4 } = require('uuid');

const generateClickId = async (req, res) => {
  const { user_id } = req.body;

  if (!user_id) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
    const click_id = uuidv4();
    await Click.create({ click_id, user_id });

    res.status(201).json({ click_id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating click ID', error: error.message });
  }
};

module.exports = { generateClickId };
