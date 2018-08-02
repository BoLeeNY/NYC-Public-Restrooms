const db = require('../config/connection');


module.exports = {

  findAll() {
    return db.many(`
    SELECT 
        p.name,
        p.location,
        p.borough,
        a.open,
        a.handicap
    FROM parks p
    JOIN parks p
    ON a.parks_id = p.id
    ORDER BY p.name
    `);
  },

  findById(id) {
    return db.one(`
    SELECT 
        p.name,
        p.location,
        p.borough,
        a.open,
        a.handicap
    FROM parks p
    JOIN parks p
    ON a.parks_id = p.id
    WHERE p.id = $1`, id);
  },

  save(access) {
    return db.one(`
    INSERT INTO access (open, handicap)
    VALUES ($/open/, $/handicap/)
    RETURNING *`, access);
  },

  update(access) {
    return db.one(`
      UPDATE access
      SET name = $/open/,
      location = $/handicap/
      JOIN parks p
      ON a.parks_id = p.id
      WHERE p.id = $/parks_id/
      RETURNING *`, access);
  },

  destroy(id) {
    return db.none(`
      DELETE FROM access
      WHERE id = $1`, id);
  },


};
