module.exports = {

  showParks(req, res) {
    res.render('showParks', {
      parks: res.locals.data,
    });
  },

};
