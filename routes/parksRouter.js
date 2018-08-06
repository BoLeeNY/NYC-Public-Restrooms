// This imports the middleware express
const express = require('express');
// These import their respective controller functions
const parksController = require('../controllers/parksController');
const view = require('../controllers/viewController');

const parksRouter = express.Router();


const showJSON = (req, res) => {
  res.json(res.locals.data);
};

// This is an error handler
const handle404 = (err, req, res, next) => {
  res.sendStatus(404);
};

// This route gets the data for one park and displays it using the showEdit.ejs file
parksRouter.route('/:id/edit')
  .get(parksController.getOne, view.showEdit);
// This route prompts a blank form to be filled in
parksRouter.get('/new', parksController.blankPark, view.showNew);
// This route searches and displays the users query
parksRouter.get('/search', parksController.search, view.showPark);
// This route handles displaying, editing, and deleting a single park
parksRouter.route('/:id')
  .get(parksController.getOne, view.showOne)
  .delete(parksController.destroy, view.handleDestroy)
  .put(parksController.update, view.handleUpdate);
// This route handles displaying all parks and creating a new park
parksRouter.route('/')
  .get(parksController.index, view.showParks)
  .post(parksController.new, view.handleCreate);
// This uses the error handler
parksRouter.use(handle404);

// This exports the router
module.exports = parksRouter;
