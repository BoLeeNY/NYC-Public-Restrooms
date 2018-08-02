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

/*function seedParks() {
  return fetch('https://data.cityofnewyork.us/resource/r27e-u3sy.json')
    .then(checkOk)
    .then((data) => {
      for (let i = 0; i < data.length; i += 1) {
        parks.save(data[i]);
        access.save(data[i]);
      }
    });
}*/

function seedParks() {
    return fetch('https://data.cityofnewyork.us/resource/r27e-u3sy.json')
    .then(checkOk)
      .then((data) => {
        for (let i = 0; i < data.length; i += 1) {
            if (data.hadicap_accessible === null) {
                data.handicap_accessible = 'none';
            }
            parks.save(data[i]);
        }
      });
  }

seedParks();
