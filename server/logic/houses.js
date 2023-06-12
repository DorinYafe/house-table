const { House } = require('../models');

const getHouseById = async (id) => {
  return House.findByPk(id);
};

const updateHouse = async (currentValue, loanAmount, risk, id) => {
  return House.update(
    {
      currentValue: currentValue,
      loanAmount: loanAmount,
      risk: risk,
    },
    {
      where: { id: id },
    }
  );
};

module.exports = {
  getHouseById,
  updateHouse,
};
