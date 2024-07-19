const Sequelize = require('sequelize');
const config = require('../config/config.json').development;

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const User = require('./userModel')(sequelize, Sequelize.DataTypes);
const Wallet = require('./wallets')(sequelize, Sequelize.DataTypes);
const Click = require('./click')(sequelize, Sequelize.DataTypes);
User.hasOne(Wallet, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Wallet.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

module.exports = {
  User,
  Wallet,
  sequelize,
  Click
};
