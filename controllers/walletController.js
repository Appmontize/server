const { Wallet } = require('../models');

exports.getWallet = async (req, res) => {
  const { user_id } = req.params;

  try {
    const wallet = await Wallet.findOne({ where: { user_id } });
    if (!wallet) {
      return res.status(404).json({ error: 'Wallet not found' });
    }

    res.status(200).json({ wallet });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCoins = async (req, res) => {
  const { user_id, amount } = req.body;

  try {
    const wallet = await Wallet.findOne({ where: { user_id } });
    if (!wallet) {
      return res.status(404).json({ error: 'Wallet not found' });
    }

    wallet.coins += amount;
    await wallet.save();

    res.status(200).json({ message: 'Coins updated', wallet });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
