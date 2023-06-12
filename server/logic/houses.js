const { House } = require('../models');

const getAllHouses = async () => {
  return House.findAll();
};

const getHouseById = async (id) => {
  return House.findByPk(id);
};

const createHouse = async (house) => {
  return House.create(house);
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
  getAllHouses,
  getHouseById,
  createHouse,
  updateHouse,
};
