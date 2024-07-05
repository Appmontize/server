module.exports = (sequelize, DataTypes) => {
    const Wallet = sequelize.define('Wallet', {
      wallet_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      coins: { type: DataTypes.INTEGER, defaultValue: 0 },
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    }, {
      timestamps: false
    });
  
    Wallet.associate = (models) => {
      Wallet.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE' });
    };
  
    return Wallet;
  };
  