-- CREATE USER pernm;
-- CREATE DATABASE pernm;
-- GRANT ALL PRIVILEGES ON DATABASE pernm TO pernm;
CREATE TABLE data (
  ID SERIAL PRIMARY KEY,
  firstname TEXT,
  lastname TEXT
);
INSERT INTO data (firstname, lastname)
VALUES
  ('John', 'Doeee');
