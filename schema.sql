DROP DATABASE IF EXISTS CareerLattice;
CREATE DATABASE CareerLattice;

USE CareerLattice;

CREATE TABLE User (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Salt VARCHAR(255) NOT NULL,
    Type ENUM('Employee', 'Admin') NOT NULL
);

CREATE TABLE Department (
    DepartmentID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL
);

CREATE TABLE School (
    SchoolID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL
);

CREATE TABLE Band (
    BandID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    SchoolID INT,
    Training MEDIUMTEXT,
    Responsibilities MEDIUMTEXT,
    Description MEDIUMTEXT,
    FOREIGN KEY (SchoolID)
        REFERENCES School (SchoolID)
);

CREATE TABLE Capability (
    CapabilityID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    DepartmentID INT,
    FOREIGN KEY (DepartmentID)
        REFERENCES Department (DepartmentID)
);

CREATE TABLE Role (
    RoleID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    DepartmentID INT,
    BandID INT,
    Summary MEDIUMTEXT,
    FOREIGN KEY (DepartmentID)
        REFERENCES Department (DepartmentID),
    FOREIGN KEY (BandID)
        REFERENCES Band (BandID)
);

CREATE TABLE Role_Capability (
    RoleID INT,
    CapabilityID INT,
    PRIMARY KEY (RoleID , CapabilityID),
    FOREIGN KEY (RoleID)
        REFERENCES Role (RoleID),
    FOREIGN KEY (CapabilityID)
        REFERENCES Capability (CapabilityID)
);

CREATE TABLE CapabilityLead (
    CapabilityLeadID INT PRIMARY KEY AUTO_INCREMENT,
    CapabilityID INT,
    Name VARCHAR(100),
    Message MEDIUMTEXT,
    FOREIGN KEY (CapabilityID)
        REFERENCES Capability (CapabilityID)
);

INSERT INTO Department(Name)
VALUES ('Sales & Marketing'), ('Technical'), ('Consulting'), ('Experience Design'), ('Management'),
('Central Services Team');

INSERT INTO Capability(Name, DepartmentID)
VALUES ('Business Development', 1), ('Account Management', 1), ('Sales', 1), ('Inside Sales Development', 1),
('Pre Sales & Bid Management', 1), ('Marketing', 1);

INSERT INTO School (Name)
VALUES ('Inspire'), ('Explore'), ('Discover');

INSERT INTO Band (Name, SchoolID)
VALUES ('Executive', 1), ('Leadership Executive', 1), ('Principal', 1), ('Manager', 2), ('Consultant', 2),
('Senior Associate', 2), ('Associate', 1), ('Trainee', 1), ('Apprentice', 1);

INSERT INTO Role (Name, DepartmentID, BandID)
VALUES ('Head of Business Unit', 1, 1), ('Head of Business Unit', 1, 1), ('Head of Business Unit', 1, 1), 
('Head of Business Unit', 1, 1);
INSERT INTO Role (Name, DepartmentID, BandID)
values ('Sales Director', 1, 2), ('Sales Director', 1, 2), ('Sales Director', 1, 2), 
('Marketing Leader', 1, 2);
INSERT INTO Role (Name, DepartmentID, BandID)
values ('Business Development Director', 1, 3), ('Account Director', 1, 3), ('Senior Sales Executive', 1, 3), 
('Country Manager', 1, 3), ('Senior Presales Manager', 1, 3), ('Senior Marketing Manager', 1, 3);
INSERT INTO Role (Name, DepartmentID, BandID)
VALUES ('Business Development Manager', 1, 4), ('Account Manager', 1, 4), ('Sales Executive', 1, 4), 
('Territory Manager', 1, 4), ('Presales Manager', 1, 4), ('Marketing Manager', 1, 4);
INSERT INTO Role (Name, DepartmentID, BandID)
VALUES ('Junior Business Development Manager', 1, 5), ('Junior Account Manager', 1, 5), ('Sales Executive', 1, 5), 
('Territory Manager', 1, 5), ('Senior Presales Consultant', 1, 5), ('Senior Marketing Executive', 1, 5);
insert into Role (Name, DepartmentID, BandID)
VALUES ('Sales Associate', 1, 6), ('Senior Sales Development Representative', 1, 6), ('Presales Consultant', 1, 6), 
('Marketing Executive', 1, 6);
INSERT INTO Role (Name, DepartmentID, BandID)
VALUES ('Sales Associate', 1, 7), ('Sales Development Representative', 1, 7), ('Presales Associate', 1, 7), 
('Marketing Associate', 1, 7);
INSERT INTO Role (Name, DepartmentID, BandID)
VALUES ('Sales Development Representative', 1, 8), ('Trainee Presales Associate', 1, 8), ('Marketing Assistant', 1, 8);

INSERT INTO Role_Capability (RoleID, CapabilityID)
VALUES (1,1), (1,2), (2,3), (3,4), (3,5), (4,6);
INSERT INTO Role_Capability (RoleID, CapabilityID)
VALUES (5,1), (5,2), (6,3), (7,4), (7,5), (8,6);
INSERT INTO Role_Capability (RoleID, CapabilityID)
VALUES (9,1), (10,2), (11,3), (12,4), (13,5), (14,6);
INSERT INTO Role_Capability (RoleID, CapabilityID)
VALUES (15,1), (16,2), (17,3), (18,4), (19,5), (20,6);
INSERT INTO Role_Capability (RoleID, CapabilityID)
VALUES (21,1), (22,2), (23,3), (24,4), (25,5), (26,6);
INSERT INTO Role_Capability (RoleID, CapabilityID)
VALUES (27,3), (28,4), (29,5), (30,6);
INSERT INTO Role_Capability (RoleID, CapabilityID)
VALUES (31,3), (32,4), (33,5), (34,6);
INSERT INTO Role_Capability (RoleID, CapabilityID)
VALUES (35,4), (36,5), (37,6);
