const express = require('express');
const router = express.Router();
const { House } = require('../models');
const { calculateRisk } = require('../utils');
const {
  getAllHouses,
  getHouseById,
  createHouse,
  updateHouse,
} = require('../logic/houses');

// Get a list of all the houses 
router.get('/', async (req, res) => {
  try {
    const houses = await getAllHouses();
    res.json(houses).status(200);
  } catch (error) {
    res.send('Server error').status(500);
    console.error(error);
  }
});

// Get a house by id
router.get('/byId/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const house = await getHouseById(id);
    res.json(house).status(200);
  } catch (error) {
    res.send('Server error').status(500);
    console.error(error);
  }
});

// Create new house recored
router.post('/', async (req, res) => {
  try {
    const house = req.body;
    house.risk = calculateRisk(house.currentValue, house.loanAmount);
    const newHouse = await createHouse(house);
    res.json(newHouse).status(201);
  } catch (error) {
    res.send('Server error').status(500);
    console.error(error);
  }
});

// Update a house recored by the id 
router.put('/byId/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { currentValue, loanAmount } = req.body;
    const risk = calculateRisk(currentValue, loanAmount);
    await updateHouse(currentValue, loanAmount, risk, id);
    const updatedHouse = await getHouseById(id);
    res.json(updatedHouse);
  } catch (error) {
    res.send('Server error').status(500);
    console.error(error);
  }
});

module.exports = router;
