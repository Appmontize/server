module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        user_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        password_hash: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    }, {
        timestamps: true
    });

    User.associate = (models) => {
        User.hasOne(models.Wallet, { foreignKey: 'user_id', onDelete: 'CASCADE' });
    };

    return User;
};
