
const db = require('../config/connection');


module.exports = {

  // This function returns all of the values in table parks
  findAll() {
    return db.many(`
    SELECT *
    FROM parks p
    ORDER BY p.name
    `);
  },

  // This function returns a single row from table parks
  findById(id) {
    return db.one(`
    SELECT *
    FROM parks p
    WHERE p.id = $1`, id);
  },

  // This returns all the values from a specific search
  search() {
    return db.many(`
    SELECT *
    FROM parks p
    WHERE p.borough LIKE '%ook%'
    `);
  },

  // This function creates a new row in table parks
  save(park) {
    return db.one(`
    INSERT INTO parks (name, location, borough, open, handicap)
    VALUES ($/name/, $/location/, $/borough/, $/open_year_round/, $/handicap_accessible/)
    RETURNING *`, park);
  },

  // This function edits a single row in table parks
  update(id, park) {
    return db.one(`
      UPDATE parks
      SET name = $2,
      location = $3,
      borough = $4,
      open = $5,
      handicap = $6
      WHERE parks.id = $1
      RETURNING *`, [id, park.name, park.location, park.borough, park.open, park.handicap]);
  },

  // This function deletes a single row from table parks
  destroy(id) {
    return db.none(`
      DELETE FROM parks
      WHERE id = $1`, id);
  },


};
