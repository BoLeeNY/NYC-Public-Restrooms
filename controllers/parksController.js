
const db = require('../models/parks');

module.exports = {

  index(req, res, next) {
    db.findAll()
      .then((park) => {
        res.locals.park = park;
        next();
      })
      .catch(e => next(e));
  },

  getOne(req, res, next) {
    db.findById(req.params.id)
      .then((parks) => {
        res.locals.parks = parks;
        next();
      })
      .catch(e => next(e));
  },

  new(req, res, next) {
    const {
      name, location, borough, open, handicap,
    } = req.body;
    db.save({
      name, location, borough, open, handicap,
    })
      .then((parks) => {
        res.locals.parks = parks;
        next();
      })
      .catch(e => next(e));
  },

  destroy(req, res, next) {
    const { id } = req.params;
    db.destroy(id)
      .then(() => next())
      .catch(e => next(e));
  },

  update(req, res, next) {
    const { id } = req.params;
    const parkData = req.body;
    db.update(id, parkData)
      .then(() => next())
      .catch(e => next(e));
  },

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

};
