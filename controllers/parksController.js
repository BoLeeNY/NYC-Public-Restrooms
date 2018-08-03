
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
    const {name, location, borough, open, handicap} = req.body;
    db.save({name, location, borough, open, handicap})
      .then((parks) => {
        res.locals.parks = parks;
        next();
      })
      .catch(e => next(e));
  },

  destroy(req, res, next) {
      const { id } = req.params;
      db.delete(id)
      .then(data => next())
      .catch(e => next(e));
  }
};
