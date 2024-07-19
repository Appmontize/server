const { Wallet, Click } = require('../models');

const handlePostback = async (req, res) => {
  const { af_tranid, click_id } = req.query;

  if (!af_tranid || !click_id) {
    return res.status(400).json({ status: 'failure', message: 'Missing parameters' });
  }

  try {
    const click = await Click.findOne({ where: { click_id } });

    if (click) {
      await rewardUser(click.user_id);
      return res.status(200).json({ status: 'success' });
    } else {
      return res.status(404).json({ status: 'failure', message: 'Click ID not found' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: 'failure', message: 'Internal server error' });
  }
};

const rewardUser = async (user_id) => {
  const wallet = await Wallet.findOne({ where: { user_id } });

  if (wallet) {
    wallet.coins += 100; // Reward the user with 100 coins
    await wallet.save();
  } else {
    // If the wallet doesn't exist, create one
    await Wallet.create({ user_id, coins: 100 });
  }
};

module.exports = { handlePostback };
