// I used the soda-lab as a template for my controller functions
// This imports the SQL models
const db = require('../models/parks');

// This exports all of the functions
module.exports = {

  // This uses the findAll function from the model and stores the data into res.locals
  index(req, res, next) {
    db.findAll()
      .then((park) => {
        res.locals.park = park;
        next();
      })
      .catch(e => next(e));
  },

  // This uses the findById to find and store the data for a single park
  getOne(req, res, next) {
    db.findById(req.params.id)
      .then((parks) => {
        res.locals.parks = parks;
        next();
      })
      .catch(e => next(e));
  },

  // This gives the search function the parameters to search for
  search(req, res, next) {
    db.search()
      .then((search) => {
        res.locals.data = search;
        next();
      })
      .catch(e => next(e));
  },

  // This takes user input data as parameters to save a park to the database
  new(req, res, next) {
    const {
      name, location, borough, open_year_round, handicap_accessible,
    } = req.body;
    db.save({
      name, location, borough, open_year_round, handicap_accessible,
    })
      .then((parks) => {
        res.locals.parks = parks;
        next();
      })
      .catch(e => next(e));
  },

  // This deletes a park based on it's id
  destroy(req, res, next) {
    const { id } = req.params;
    db.destroy(id)
      .then(() => next())
      .catch(e => next(e));
  },

  // This updates a parks data based on user input stored in req.body
  update(req, res, next) {
    const { id } = req.params;
    const parkData = req.body;
    db.update(id, parkData)
      .then(() => next())
      .catch(e => next(e));
  },

  // This sets empty data values for the user to modify
  blankPark(req, res, next) {
    const park = {
      name: '',
      location: '',
      borough: '',
      open: '',
      handicap: '',
    };
    res.locals.data = park;
    next();
  },

  // This sets empty values for the user to fill with data they want to find
  searchPark(req, res, next) {
    const search = {
      name: '',
      location: '',
      borough: '',
    };
    res.locals.search = search;
    next();
  },

};
