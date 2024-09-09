const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', register);
router.post('/login', login);


router.get('/users', async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: ['user_id', 'name', 'email', 'created_at'],
        include: [{
          model: Wallet,
          attributes: ['coins'] // Include coins field from Wallet model
        }]
      });
      res.status(200).json({ users });
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
  });


module.exports = router;
