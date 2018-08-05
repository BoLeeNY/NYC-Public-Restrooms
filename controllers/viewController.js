module.exports = {

  // This populates the showParks.ejs page with data from res.locals
  showParks(req, res) {
    res.render('showParks', {
      parks: res.locals.data,
    });
  },
  // This populates the showOne.ejs page with data from one park
  showOne(req, res) {
    const parksData = res.locals.data;
    res.render('showOnePark', { park: parksData });
  },
  // This redirects the user to view the newly create park
  handleCreate(req, res) {
    const parkId = res.locals.parks;
    res.redirect(`/parks/${parkId.id}`);
  },
  // This shows the empty form to be filled out
  showNew(req, res) {
    res.render('create');
  },
  // This shows the empty form for search requests
  searchPark(req, res, next) {
    res.render('search')
      .then(() => next());
  },
  // This shows the search results
  showPark(req, res, next) {
    res.render('showOnePark', {
      parks: res.locals.search,
    })
      .then(() => next());
  },
  // This redirects the user back to the homepage after a delete
  handleDestroy(req, res) {
    res.redirect('/parks');
  },
  // This shows the user the park that they just updated
  handleUpdate(req, res) {
    const id = req.params;
    res.redirect(`/parks/${id.id}`);
  },
  // This shows a pre-filled form with the park data a user would edit
  showEdit(req, res) {
    res.render('showEditForm');
  },

};
