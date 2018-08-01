DROP TABLE IF EXISTS parks;
DROP TABLE IF EXISTS access;
DROP TABLE IF EXISTS parks_access;

CREATE TABLE parks {
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    borough VARCHAR(255)
};

CREATE INDEX ON parks (name);
CREATE INDEX ON parks (borough);

CREATE TABLE access {
    id SERIAL PRIMARY KEY,
    open BOOLEAN,
    handicap BOOLEAN
};

CREATE INDEX ON access (open);

CREATE TABLE parks-access {
    id SERIAL PRIMARY KEY
    parks_id INTEGER REFERENCES parks (id) ON DELETE CASCADE,
    access_id INTEGER REFERENCES access (id) ON DELETE CASCADE
}