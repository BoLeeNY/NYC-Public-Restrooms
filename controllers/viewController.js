module.exports = {

  showParks(req, res) {
    res.render('showParks', {
      parks: res.locals.data,
    });
  },

  showOne(req, res) {
    const parksData = res.locals.data;
    res.render('showOnePark', { park: parksData });
  },

  handleCreate(req, res) {
    const parkId = res.locals.data;
    res.render('showOnePark', {park: parkId});
  },

  showNew(req, res) {
    res.render('create');
  },

  handleDestroy(req, res) {
    res.redirect('/parks');
  },

};
