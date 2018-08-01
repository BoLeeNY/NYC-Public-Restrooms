
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
    JOIN parks_access x
    ON x.parks_id = p.id
    JOIN access a
    ON x.access_id = a.id
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
    JOIN parks_access x
    ON x.parks_id = p.id
    JOIN access a
    ON x.access_id = a.id
    WHERE p.id = $1`, id);
  },

  save(park) {
    return db.one(`
    INSERT INTO parks (name, location, borough)
    VALUES ($/name/, $/location/, $/borough/)
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
