
const db = require('../config/connection');


module.exports = {

  findAll() {
    return db.many(`
    SELECT *
    FROM parks p
    ORDER BY p.name
    `);
  },

  findById(id) {
    return db.one(`
    SELECT *
    FROM parks p
    WHERE p.id = $1`, id);
  },

  save(park) {
    return db.one(`
    INSERT INTO parks (name, location, borough, open, handicap)
    VALUES ($/name/, $/location/, $/borough/, $/open/, $/handicap/)
    RETURNING *`, park);
  },

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

  destroy(id) {
    return db.none(`
      DELETE FROM parks
      WHERE id = $1`, id);
  },


};
