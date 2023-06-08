module.exports = (sequelize, DataTypes) => {
  const House = sequelize.define('House', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currentValue: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    loanAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    risk: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  return House;
};
