const express = require('express');
const parksController = require('../controllers/parksController');
const view = require('../controllers/viewController');

const parksRouter = express.Router();


const showJSON = (req, res) => {
  res.json(res.locals.data);
};

parksRouter.get('/new', view.showNew);

parksRouter.route('/:id')
  .get(parksController.getOne, view.showOne)
  .delete(parksController.destroy, view.handleDestroy);

parksRouter.route('/')
  .get(parksController.index, view.showParks)
  .post(parksController.new, view.handleCreate);


module.exports = parksRouter;
