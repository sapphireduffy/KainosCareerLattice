DROP DATABASE IF EXISTS career_lattice;
CREATE DATABASE career_lattice;

USE career_lattice;

-- ---------------------------------- TABLES ---------------------------- --

CREATE TABLE user (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
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
    job_spec_url VARCHAR(500),
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

-- ---------------------------------- VIEWS ------------------------------- --

CREATE VIEW viewDepartments AS 
SELECT department_id, name
FROM department;

CREATE VIEW viewTableData AS
SELECT department.department_id, department.name AS 'Department Name', band.band_id, band.name AS 'Band Name', 
capability.capability_id, capability.name AS 'Capability Name', role.role_id, role.name AS 'Role Name'
FROM department JOIN capability ON department.department_id = capability.department_id JOIN role_capability ON
role_capability.capability_id = capability.capability_id JOIN role ON role_capability.role_id = role.role_id JOIN band
ON band.band_id = role.band_id 
ORDER BY band.band_id ASC, capability.capability_id ASC;

-- ---------------------------------- INSERTS ---------------------------- --

INSERT INTO department(name) -- All Departments
VALUES ('Sales & Marketing'), ('Technical'), ('Consulting'), ('Experience Design'), ('Management'),
('Central Services Team');

INSERT INTO capability(name, department_id) -- Sales & Marketing Capabilities
VALUES ('Business Development', 1), ('Account Management', 1), ('Sales', 1), ('Inside Sales Development', 1),
('Pre Sales & Bid Management', 1), ('Marketing', 1);
INSERT INTO capability(name, department_id) -- Technical Capabilites
VALUES ('Software Engineering', 2), ('Cyber Security', 2), ('Architect', 2), ('Ops', 2);
INSERT INTO capability(name, department_id) -- Central Services Team Capabilites
VALUES ('Systems', 6);

INSERT INTO school (name) -- All Schools
VALUES ('Inspire'), ('Explore'), ('Discover');

INSERT INTO band (name, school_id) -- All Bands
VALUES ('Executive', 1), ('Leadership Executive', 1), ('Principal', 1), ('Manager', 2), ('Consultant', 2),
('Senior Associate', 2), ('Associate', 3), ('Trainee', 3), ('Apprentice', 3);

INSERT INTO role (name, department_id, band_id) -- Roles in the Sales & Marketing department
VALUES ('Head of Business Unit', 1, 1), ('Head of Business Unit', 1, 1), ('Head of Business Unit', 1, 1), ('Head of Business Unit', 1, 1);
INSERT INTO role (name, department_id, band_id)
VALUES ('Sales Director', 1, 2), ('Sales Director', 1, 2), ('Sales Director', 1, 2), ('Marketing Leader', 1, 2);
INSERT INTO role (name, department_id, band_id)
VALUES ('Business Development Director', 1, 3), ('Account Director', 1, 3), ('Senior Sales Executive', 1, 3), 
('Country Manager', 1, 3), ('Senior Presales Manager', 1, 3), ('Senior Marketing Manager', 1, 3);
INSERT INTO role (name, department_id, band_id)
VALUES ('Business Development Manager', 1, 4), ('Account Manager', 1, 4), ('Sales Executive', 1, 4), 
('Territory Manager', 1, 4), ('Presales Manager', 1, 4), ('Marketing Manager', 1, 4);
INSERT INTO role (name, department_id, band_id)
VALUES ('Junior Business Development Manager', 1, 5), ('Junior Account Manager', 1, 5), ('Sales Executive', 1, 5), 
('Territory Manager', 1, 5), ('Senior Presales Consultant', 1, 5), ('Senior Marketing Executive', 1, 5);
insert into role (name, department_id, band_id)
VALUES ('Sales Associate', 1, 6), ('Senior Sales Development Representative', 1, 6), ('Presales Consultant', 1, 6), ('Marketing Executive', 1, 6);
INSERT INTO role (name, department_id, band_id)
VALUES ('Sales Associate', 1, 7), ('Sales Development Representative', 1, 7), ('Presales Associate', 1, 7), ('Marketing Associate', 1, 7);
INSERT INTO role (name, department_id, band_id)
VALUES ('Sales Development Representative', 1, 8), ('Trainee Presales Associate', 1, 8), ('Marketing Assistant', 1, 8);

INSERT INTO role (name, department_id, band_id, summary, job_spec_url) -- Roles in the Technical Department
VALUES ('Lead Software Engineer', 2, 5, 'Expert in their field, is consulted by others, supervises others, works well even if under pressure, effectively coaches people.', 'https://kainossoftwareltd.sharepoint.com/:b:/r/people/Shared%20Documents/Job%20Descriptions/Software%20Engineering/Job%20Specification%20-%20Lead%20Software%20Engineer%20-%20Consultant.pdf?csf=1&e=Ul5LFK'), 
('Senior Software Engineer', 2, 6, 'Delivers with limited supervision, trusted to make tactical decisions.', 'https://kainossoftwareltd.sharepoint.com/:b:/r/people/Shared%20Documents/Job%20Descriptions/Software%20Engineering/Job%20Specification%20-%20Senior%20Software%20Engineer%20-%20Senior%20Associate.pdf?csf=1&e=K4tAWT'),
('Associate Software Engineer', 2, 7, 'Established deliverer, works well in a team.', 'https://kainossoftwareltd.sharepoint.com/:b:/r/people/Shared%20Documents/Job%20Descriptions/Software%20Engineering/Job%20Specification%20-%20Software%20Engineer%20-%20Associate.pdf?csf=1&e=VcEmvE'),
('Trainee Software Engineer', 2, 8, 'Graduate entry level, here to learn, but primarily to contribute to projects.', 'https://kainossoftwareltd.sharepoint.com/:b:/r/people/Shared%20Documents/Job%20Descriptions/Software%20Engineering/Job%20Specification%20-%20Software%20Engineer%20-%20Trainee.pdf?csf=1&e=5JqNE0'),
('Apprentice Software Engineer', 2, 9, 'Here primarily to learn; contributes to projects.', null);
INSERT INTO role (name, department_id, band_id, summary, job_spec_url)
VALUES ('Senior Security Architect', 2, 4, 'Serves the company\'s commercial and delivery interests, owns single initiatives or projects, advocates effective coaching and ensures that it happens.', 'https://kainossoftwareltd.sharepoint.com/:b:/r/people/Shared%20Documents/Job%20Descriptions/Cyber%20Security/Job%20Specification%20-%20Senior%20Security%20Architect%20-%20Manager.pdf?csf=1&e=DJdlxg'), 
('Security Architect', 2, 5, 'Expert in their field, is consulted by others, supervises others, works well even if under pressure, effectively coaches people.', 'https://kainossoftwareltd.sharepoint.com/:b:/r/people/Shared%20Documents/Job%20Descriptions/Cyber%20Security/Job%20Specification%20-%20Security%20Architect%20-%20Consultant.pdf?csf=1&e=4T0KM0'), 
('Security Engineer', 2, 6, 'Works within teams to establish good security practices, supporting the design, development and testing of the service being delivered for both application and infrastructure. Is viewed as an authority figure for cyber security and will bring strong technical leadership including mentoring and coaching Kainos people, to strengthen our security capability across the organisation.', 'https://kainossoftwareltd.sharepoint.com/:b:/r/people/Shared%20Documents/Job%20Descriptions/Cyber%20Security/Job%20Specification%20-%20Senior%20Security%20Engineer%20-%20Senior%20Associate.pdf?csf=1&e=3XLX9o');
INSERT INTO role (name, department_id, band_id, summary, job_spec_url) 
VALUES ('Chief Technology Officer', 2, 1, 'Owns and leads a business area (e.g. a BU) or supporting function (e.g. Legal or HR) with responsibility for budget, people and profit & loss.', null), 
('Technology Leader', 2, 2, 'Recognised leader and developer of Kainos talent, continuously improves Kainos, comfortable in novel situations, owns multiple initiatives, accountable for delivery at Programme level.', null), 
('Principal Architect', 2, 3, 'Recognised leader and developer of Kainos talent, continuously improves Kainos, comfortable in novel situations, owns multiple initiatives, accountable for delivery at Programme level.', null),
('Solution Architect', 2, 4, 'Designs and delivers large-scale solutions from scratch.', 'https://kainossoftwareltd.sharepoint.com/:b:/r/people/Shared%20Documents/Job%20Descriptions/Architect/Job%20Specification%20-%20Solution%20Architect%20-%20Manager.pdf?csf=1&e=TQLL8t'), 
('Technical Architect', 2, 5, 'Expert in their field, is consulted by others, supervises others, works well even if under pressure, effectively coaches people.', 'https://kainossoftwareltd.sharepoint.com/:b:/r/people/Shared%20Documents/Job%20Descriptions/Architect/Job%20Specification%20-%20Technical%20Architect%20-%20Consultant.pdf?csf=1&e=jS7nhb');

INSERT INTO role (name, department_id, band_id, summary, job_spec_url) 
VALUES ('Lead Ops Engineer', 2, 5, 'Expert in their field, is consulted by others, supervises others, works well even if under pressure, effectively coaches people.', 'https://kainossoftwareltd.sharepoint.com/:w:/r/people/Shared%20Documents/Job%20Descriptions/Ops/Consultant%20-%20Lead%20Ops%20Engineer.docx?d=wb1eb28ea306941f5a9d527dd85cab4cc&csf=1&e=UThzhB'), 
('Senior Ops Engineer', 2, 6, 'Delivers with limited supervision, trusted to make tactical decisions.', 'https://kainossoftwareltd.sharepoint.com/:w:/r/people/Shared%20Documents/Job%20Descriptions/Ops/Senior%20Associate%20-%20Senior%20Ops%20Engineer.docx?d=w4f827b196eb24246a3b3e62e3452b4dd&csf=1&e=Y7Fya1'),
('Associate Ops Engineer', 2, 7, 'Established deliverer, works well in a team.', 'https://kainossoftwareltd.sharepoint.com/:w:/r/people/Shared%20Documents/Job%20Descriptions/Ops/Associate%20-%20Ops%20Engineer.docx?d=w23925c8ff78e4c5194339c330de2ee23&csf=1&e=4ayWez'),
('Trainee Ops Engineer', 2, 8, 'Graduate entry level, here to learn, but primarily to contribute to projects.', 'https://kainossoftwareltd.sharepoint.com/:w:/r/people/Shared%20Documents/Job%20Descriptions/Ops/Trainee%20-%20Trainee%20Ops%20Engineer.docx?d=w0d08acc91803408c8e03119d43fff3d3&csf=1&e=0HCzjC');

INSERT INTO role (name, department_id, band_id, summary, job_spec_url) -- Roles in the Central Services Teams department
VALUES ('Lead Systems Engineer', 6, 5, 'Expert in their field, is consulted by others, supervises others, works well even if under pressure, effectively coaches people.', 'https://kainossoftwareltd.sharepoint.com/:b:/r/people/Shared%20Documents/Job%20Descriptions/Systems/Lead%20Systems%20Engineer.pdf?csf=1&e=UUsqcP'), 
('Senior Systems Engineer', 6, 6, 'Delivers with limited supervision, trusted to make tactical decisions.', 'https://kainossoftwareltd.sharepoint.com/:b:/r/people/Shared%20Documents/Job%20Descriptions/Systems/Senior%20Systems%20Engineer.pdf?csf=1&e=FgNeeH'), 
('Associate Systems Engineer', 6, 7, 'Established deliverer, works well in a team.', 'https://kainossoftwareltd.sharepoint.com/:b:/r/people/Shared%20Documents/Job%20Descriptions/Systems/Systems%20Engineer.pdf?csf=1&e=2iC8xD'), 
('Trainee Systems Engineer', 6, 8, 'Graduate entry level, here to learn, but primarily to contribute to projects.', 'https://kainossoftwareltd.sharepoint.com/:b:/r/people/Shared%20Documents/Job%20Descriptions/Systems/Trainee%20Systems%20Engineer.pdf?csf=1&e=xThUGg');

INSERT INTO role_capability (role_id, capability_id) -- role-capability links for Sales & Marketing
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


INSERT INTO role_capability (role_id, capability_id) -- role-capability links for Technical
VALUES (38,7), (39,7), (40,7), (41,7), (42,7);
INSERT INTO role_capability (role_id, capability_id)
VALUES (43,8), (44,8), (45,8);
INSERT INTO role_capability (role_id, capability_id)
VALUES (46,9), (47,9), (48,9), (49,9), (50,9);
INSERT INTO role_capability (role_id, capability_id)
VALUES (51,10), (52,10), (53,10), (54,10);
INSERT INTO role_capability (role_id, capability_id) -- role-capability links for Central Services Teams
VALUES (55,11), (56,11), (57,11), (58,11);