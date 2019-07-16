DROP DATABASE IF EXISTS career_lattice;
CREATE DATABASE career_lattice;
USE career_lattice;

-- ---------------------------------- TABLES ------------------------- --

CREATE TABLE user (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL,
    type ENUM('Employee', 'Admin') NOT NULL
);

CREATE TABLE department (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE school (
    school_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE band (
    band_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    school_id INT,
    training MEDIUMTEXT,
    responsibilities MEDIUMTEXT,
    description MEDIUMTEXT,
    FOREIGN KEY (school_id)
        REFERENCES school (school_id)
);

CREATE TABLE capability (
    capability_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
        REFERENCES department (department_id)
);

CREATE TABLE role (
    role_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    department_id INT,
    band_id INT,
    summary MEDIUMTEXT,
    FOREIGN KEY (department_id)
        REFERENCES department (department_id),
    FOREIGN KEY (band_id)
        REFERENCES band (band_id)
);

CREATE TABLE role_capability (
    role_id INT,
    capability_id INT,
    PRIMARY KEY (role_id , capability_id),
    FOREIGN KEY (role_id)
        REFERENCES role (role_id),
    FOREIGN KEY (capability_id)
        REFERENCES capability (capability_id)
);

CREATE TABLE capability_lead (
    capability_lead_id INT PRIMARY KEY AUTO_INCREMENT,
    capability_id INT,
    name VARCHAR(100),
    message MEDIUMTEXT,
    FOREIGN KEY (capability_id)
        REFERENCES capability (capability_id)
);

-- ---------------------------------- INSERTS ------------------------- --

INSERT INTO department(name)
VALUES ('Sales & Marketing'), ('Technical'), ('Consulting'), ('Experience Design'), ('Management'),
('Central Services Team');

INSERT INTO capability(name, department_id)
VALUES ('Business Development', 1), ('Account Management', 1), ('Sales', 1), ('Inside Sales Development', 1),
('Pre Sales & Bid Management', 1), ('Marketing', 1);

INSERT INTO school (name)
VALUES ('Inspire'), ('Explore'), ('Discover');

INSERT INTO band (name, school_id)
VALUES ('Executive', 1), ('Leadership Executive', 1), ('Principal', 1), ('Manager', 2), ('Consultant', 2),
('Senior Associate', 2), ('Associate', 1), ('Trainee', 1), ('Apprentice', 1);

INSERT INTO role (name, department_id, band_id)
VALUES ('Head of Business Unit', 1, 1), ('Head of Business Unit', 1, 1), ('Head of Business Unit', 1, 1), 
('Head of Business Unit', 1, 1);
INSERT INTO role (name, department_id, band_id)
values ('Sales Director', 1, 2), ('Sales Director', 1, 2), ('Sales Director', 1, 2), 
('Marketing Leader', 1, 2);
INSERT INTO role (name, department_id, band_id)
values ('Business Development Director', 1, 3), ('Account Director', 1, 3), ('Senior Sales Executive', 1, 3), 
('Country Manager', 1, 3), ('Senior Presales Manager', 1, 3), ('Senior Marketing Manager', 1, 3);
INSERT INTO role (name, department_id, band_id)
VALUES ('Business Development Manager', 1, 4), ('Account Manager', 1, 4), ('Sales Executive', 1, 4), 
('Territory Manager', 1, 4), ('Presales Manager', 1, 4), ('Marketing Manager', 1, 4);
INSERT INTO role (name, department_id, band_id)
VALUES ('Junior Business Development Manager', 1, 5), ('Junior Account Manager', 1, 5), ('Sales Executive', 1, 5), 
('Territory Manager', 1, 5), ('Senior Presales Consultant', 1, 5), ('Senior Marketing Executive', 1, 5);
insert into role (name, department_id, band_id)
VALUES ('Sales Associate', 1, 6), ('Senior Sales Development Representative', 1, 6), ('Presales Consultant', 1, 6), 
('Marketing Executive', 1, 6);
INSERT INTO role (name, department_id, band_id)
VALUES ('Sales Associate', 1, 7), ('Sales Development Representative', 1, 7), ('Presales Associate', 1, 7), 
('Marketing Associate', 1, 7);
INSERT INTO role (name, department_id, band_id)
VALUES ('Sales Development Representative', 1, 8), ('Trainee Presales Associate', 1, 8), ('Marketing Assistant', 1, 8);

INSERT INTO role_capability (role_id, capability_id)
VALUES (1,1), (1,2), (2,3), (3,4), (3,5), (4,6);
INSERT INTO role_capability (role_id, capability_id)
VALUES (5,1), (5,2), (6,3), (7,4), (7,5), (8,6);
INSERT INTO role_capability (role_id, capability_id)
VALUES (9,1), (10,2), (11,3), (12,4), (13,5), (14,6);
INSERT INTO role_capability (role_id, capability_id)
VALUES (15,1), (16,2), (17,3), (18,4), (19,5), (20,6);
INSERT INTO role_capability (role_id, capability_id)
VALUES (21,1), (22,2), (23,3), (24,4), (25,5), (26,6);
INSERT INTO role_capability (role_id, capability_id)
VALUES (27,3), (28,4), (29,5), (30,6);
INSERT INTO role_capability (role_id, capability_id)
VALUES (31,3), (32,4), (33,5), (34,6);
INSERT INTO role_capability (role_id, capability_id)
VALUES (35,4), (36,5), (37,6);

-- ---------------------------------- VIEWS ------------------------------- --

CREATE VIEW viewDepartments AS 
SELECT department_id, Name
FROM department;

CREATE VIEW viewLattice AS
SELECT department.name AS 'Department Name', capability.name AS 'Capability Name', role.name AS 'Role Name'
FROM department JOIN capability ON department.department_id = capability.department_id JOIN role_capability ON
role_capability.capability_id = capability.capability_id JOIN role ON role_capability.role_id = role.role_id 
WHERE department.department_id = 1;

select * from viewLattice;
