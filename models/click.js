module.exports = (sequelize, DataTypes) => {
    const Click = sequelize.define('Click', {
      click_id: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    }, {
      timestamps: false
    });
  
    return Click;
  };
  