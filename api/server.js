const express = require('express');
const db = require('../data/db-config.js');

const server = express();
server.use(express.json());

// READ all cars
server.get('/cars', async (req, res) => {
  try {
    const cars = await db('cars');
    
    res.status(200).json({
      status: 'GET_SUCCESS',
      cars
    })
  }
  catch(err) {
    res.status(500).json({
      error: 'Cannot retrieve data from the server.'
    })
  }
})

// READ a car by id
server.get('/cars/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const car = await db('cars').where({ id });

    res.status(200).json({
      status: 'GET_SUCCESS',
      car
    })
  }
  catch(err) {
    res.status(500).json({
      error: 'Cannot retrieve data from the server.'
    })
  }
})

// CREATE a car
server.post('/cars', async (req, res) => {
  const queryStr = req.body;
  try {
    const account = await db('cars').insert(queryStr);
    res.status(200).json({
      status: 'POST_SUCCESS',
      car: queryStr
    })
  }
  catch(err) {
    res.status(500).json({
      error: 'Cannot retrieve data from the server.'
    })
  }
})

module.exports = server;