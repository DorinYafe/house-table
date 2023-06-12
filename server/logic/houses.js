const { House } = require('../models');

// Get all the houses
const getAllHouses = async () => {
  return House.findAll();
};

// Get a house by id
const getHouseById = async (id) => {
  return House.findByPk(id);
};

// Create new house recored
const createHouse = async (house) => {
  return House.create(house);
};

// Update house recored by the id
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
