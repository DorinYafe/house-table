const express = require('express');
const router = express.Router();
const { House } = require('../models');

router.get('/', async (req, res) => {
  try {
    const houses = await House.findAll();
    res.json(houses).status(200);
  } catch (error) {
    res.status(500);
    console.error(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const house = req.body;
    house.risk = house.loanAmount / house.currentValue;
    if (house.risk >= 0.5) {
      house.risk = house.risk + 0.1;
    }
    await House.create(house);
    res.json(house).status(201);
  } catch (error) {
    res.status(500);
    console.error(error);
  }
});

module.exports = router;
