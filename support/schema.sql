DROP TABLE users;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

DROP TABLE students;
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    school INT NOT NULL,
    expires DATE NOT NULL
);

DROP TABLE schools;
CREATE TABLE schools (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL
);

DROP TABLE observations;
CREATE TABLE observations (
    id SERIAL PRIMARY KEY,
    users_id INT NOT NULL,
    students_id INT NOT NULL,
    tasks_id INT NOT NULL,
    duration INTERVAL NOT NULL
);

DROP TABLE tasks;
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);
INSERT INTO tasks (name) VALUES
    ('Planned Pres.'),
    ('Response Pres.'),
    ('Monitoring'),
    ('Perform. Feedbk.'),
    ('Motiv. Feedbk.'),
    ('Beg/End Class'),
    ('Equip. Mgt.'),
    ('Organization'),
    ('Behavior Mgt.'),
    ('Other Tasks');