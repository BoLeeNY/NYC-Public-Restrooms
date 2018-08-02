DROP TABLE IF EXISTS access;
DROP TABLE IF EXISTS parks;

CREATE TABLE parks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    borough VARCHAR(255),
    open VARCHAR(15),
    handicap VARCHAR(15)
);

CREATE INDEX ON parks (name);
CREATE INDEX ON parks (borough);

CREATE TABLE access (
    id SERIAL PRIMARY KEY,
    open VARCHAR(15),
    handicap VARCHAR(15),
    parks_id INTEGER REFERENCES parks (id) ON DELETE CASCADE
);

CREATE INDEX ON access (open);

