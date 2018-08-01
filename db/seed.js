const fetch = require('node-fetch');

const checkOk = (resp) => {
  console.log(resp);
  if (!resp.ok) {
    throw Error(resp.statusText);
  }
  return resp.json();
};

fetch('https://data.cityofnewyork.us/resource/r27e-u3sy.json')
  .then(checkOk);
  .then()

  findAll(brs) {
    br.forEach(`
        INSERT INTO parks (name, location, borough)
        VALUES ($/name/, $/location/, $/borough/)
        RETURNING *`, brs);
  },
