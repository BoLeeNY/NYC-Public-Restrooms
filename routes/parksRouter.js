const express = require('express');
const parksController = require('../controllers/parksController');
const view = require('../controllers/viewController');

const parksRouter = express.Router();


const showJSON = (req, res) => {
  res.json(res.locals.data);
};

const handle404 = (err, req, res, next) => {
  res.sendStatus(404);
};

parksRouter.route('/:id/edit')
  .get(parksController.getOne, view.showEdit);

parksRouter.get('/new', parksController.blankPark, view.showNew);

parksRouter.route('/:id')
  .get(parksController.getOne, view.showOne)
  .delete(parksController.destroy, view.handleDestroy)
  .put(parksController.update, view.handleUpdate);

parksRouter.route('/')
  .get(parksController.index, view.showParks)
  .post(parksController.new, view.handleCreate);

parksRouter.use(handle404);

module.exports = parksRouter;
