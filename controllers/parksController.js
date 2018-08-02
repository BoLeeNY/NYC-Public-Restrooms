
const db = require('../models/parks');

module.exports = {

  index(req, res, next) {
    db.findAll()
      .then((parks) => {
        res.locals.data = parks;
        next();
      })
      .catch(e => next(e));
  },

};
