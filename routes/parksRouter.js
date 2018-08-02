const express = require('express');
const parksController = require('../controllers/parksController');
const view = require('../controllers/viewController');

const parksRouter = express.Router();


const showJSON = (req, res) => {
  res.json(res.locals.data);
};

parksRouter.route('/')
  .get(parksController.index, view.showParks);


module.exports = parksRouter;
