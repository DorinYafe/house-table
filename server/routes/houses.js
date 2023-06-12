const express = require('express');
const router = express.Router();
const { House } = require('../models');
const { calculateRisk } = require('../utils');
const { getHouseById, updateHouse } = require('../logic/houses');

router.get('/', async (req, res) => {
  try {
    const houses = await House.findAll();
    res.json(houses).status(200);
  } catch (error) {
    res.status(500);
    console.error(error);
  }
});

router.get('/byId/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const house = await getHouseById(id);
    res.json(house).status(200);
  } catch (error) {
    res.status(500);
    console.error(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const house = req.body;
    // house.risk = house.loanAmount / house.currentValue;
    house.risk = calculateRisk(house.currentValue, house.loanAmount)
    if (house.risk >= 0.5) {
      house.risk = house.risk + 0.1;
    }
    const newHouse = await House.create(house);
    res.json(newHouse).status(201);
  } catch (error) {
    res.status(500);
    console.error(error);
  }
});

router.put('/byId/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { currentValue, loanAmount } = req.body;
    const risk = calculateRisk(currentValue, loanAmount);
    await updateHouse(currentValue, loanAmount, risk, id);
    const updatedHouse = await getHouseById(id);
    res.json(updatedHouse);
  } catch (error) {
    res.status(500);
    console.error(error);
  }
});

module.exports = router;
