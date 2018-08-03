
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

  update(park) {
    return db.one(`
      UPDATE parks
      SET name = $/name/,
      location = $/location/,
      borough = $/borough/
      WHERE parks.id = $/parks_id/
      RETURNING *`, park);
  },

  destroy(id) {
    return db.none(`
      DELETE FROM parks
      WHERE id = $1`, id);
  },


};
