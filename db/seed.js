const fetch = require('node-fetch');
const parks = require('../models/parks');
const access = require('../models/access');

const checkOk = (resp) => {
  console.log(resp);
  if (!resp.ok) {
    throw Error(resp.statusText);
  }
  return resp.json();
};


function seedParks() {
  return fetch('https://data.cityofnewyork.us/resource/r27e-u3sy.json')
    .then(checkOk)
    .then((data) => {
      for (let i = 0; i < data.length; i += 1) {
        if (!data[i].hasOwnProperty('handicap_accessible')) {
          data[i].handicap_accessible = 'none';
        }
        if (!data[i].hasOwnProperty('open_year_round')) {
          data[i].open_year_round = 'No';
        }
        parks.save(data[i]);
      }
    });
}

seedParks();
