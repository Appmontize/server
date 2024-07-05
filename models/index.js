const Sequelize = require('sequelize');
const config = require('../config/config.json');

// Initialize Sequelize with database configuration from config.json
const sequelize = new Sequelize(require('../config/config.json').development);


// Define models and their associations
const UserModel = require('./userModel');
const WalletModel = require('./wallets');

const User = UserModel(sequelize, Sequelize);
const Wallet = WalletModel(sequelize, Sequelize);

// Define associations (if any)
User.hasOne(Wallet, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Wallet.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

// Export models
module.exports = {
  User,
  Wallet,
  sequelize, // Export the Sequelize instance itself for raw queries, migrations, etc.
};
