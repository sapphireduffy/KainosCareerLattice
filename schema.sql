drop database if exists CareerLattice;
create database CareerLattice;


drop user if exists user@localhost;
create user user@localhost identified with mysql_native_password by 'careerLattice!';


use CareerLattice;


CREATE TABLE User(
    UserID int primary key auto_increment,
    Username varchar(255) not null,
    Password varchar(255) not null,
    Salt varchar(255) not null,
    Type enum('Employee','Admin') not null
);


Create table Department (
  DepartmentID int primary key Auto_increment,
  Name varchar(100) not null
);


Create table School (
  SchoolID int primary key Auto_increment,
  Name varchar(100) not null
);


Create table Band (
  BandID int primary key Auto_increment,
  Name varchar(100) not null,
  SchoolID int,
  Training mediumtext,
  Responsibilities mediumtext,
  Description mediumtext,
  foreign key(SchoolID) references School(SchoolID)
);


Create table Capability (
  CapabilityID int primary key Auto_increment,
  Name varchar(100) not null,
  DepartmentID int,
  foreign key(DepartmentID) references Department(DepartmentID)
);


Create table Role (
  RoleID int primary key Auto_increment,
  Name varchar(100) not null,
  DepartmentID int,
  BandID int,
  Summary mediumtext,
  foreign key(DepartmentID) references Department(DepartmentID),
  foreign key(BandID) references Band(BandID)
);


Create table Role_Capability (
  RoleID int,
  CapabilityID int,
  primary key (RoleID, CapabilityID),
  foreign key(RoleID) references Role(RoleID),
  foreign key(CapabilityID) references Capability(CapabilityID)
);


Create table CapabilityLead (
    CapabilityLeadID int primary key Auto_increment, 
    CapabilityID int,
    Name varchar(100),
    Message mediumtext,
    foreign key(CapabilityID) references Capability(CapabilityID)
);


insert into Department(Name)
values ('Sales & Marketing'), ('Technical'), ('Consulting'), ('Experience Design'), ('Management'),
('Central Services Team');


insert into Capability(Name, DepartmentID)
values ('Business Development', 1), ('Account Management', 1), ('Sales', 1), ('Inside Sales Development', 1),
('Pre Sales & Bid Management', 1), ('Marketing', 1);


insert into School (Name)
values ('Inspire'), ('Explore'), ('Discover');


insert into Band (Name, SchoolID)
values ('Executive', 1), ('Leadership Executive', 1), ('Principal', 1), ('Manager', 2), ('Consultant', 2),
('Senior Associate', 2), ('Associate', 1), ('Trainee', 1), ('Apprentice', 1);


insert into Role (Name, DepartmentID, BandID)
values ('Head of Business Unit', 1, 1), ('Head of Business Unit', 1, 1), ('Head of Business Unit', 1, 1), 
('Head of Business Unit', 1, 1);
insert into Role (Name, DepartmentID, BandID)
values ('Sales Director', 1, 2), ('Sales Director', 1, 2), ('Sales Director', 1, 2), 
('Marketing Leader', 1, 2);
insert into Role (Name, DepartmentID, BandID)
values ('Business Development Director', 1, 3), ('Account Director', 1, 3), ('Senior Sales Executive', 1, 3), 
('Country Manager', 1, 3), ('Senior Presales Manager', 1, 3), ('Senior Marketing Manager', 1, 3);
insert into Role (Name, DepartmentID, BandID)
values ('Business Development Manager', 1, 4), ('Account Manager', 1, 4), ('Sales Executive', 1, 4), 
('Territory Manager', 1, 4), ('Presales Manager', 1, 4), ('Marketing Manager', 1, 4);
insert into Role (Name, DepartmentID, BandID)
values ('Junior Business Development Manager', 1, 5), ('Junior Account Manager', 1, 5), ('Sales Executive', 1, 5), 
('Territory Manager', 1, 5), ('Senior Presales Consultant', 1, 5), ('Senior Marketing Executive', 1, 5);
insert into Role (Name, DepartmentID, BandID)
values ('Sales Associate', 1, 6), ('Senior Sales Development Representative', 1, 6), ('Presales Consultant', 1, 6), 
('Marketing Executive', 1, 6);
insert into Role (Name, DepartmentID, BandID)
values ('Sales Associate', 1, 7), ('Sales Development Representative', 1, 7), ('Presales Associate', 1, 7), 
('Marketing Associate', 1, 7);
insert into Role (Name, DepartmentID, BandID)
values ('Sales Development Representative', 1, 8), ('Trainee Presales Associate', 1, 8), ('Marketing Assistant', 1, 8);


insert into Role_Capability (RoleID, CapabilityID)
values (1,1), (1,2), (2,3), (3,4), (3,5), (4,6);
insert into Role_Capability (RoleID, CapabilityID)
values (5,1), (5,2), (6,3), (7,4), (7,5), (8,6);
insert into Role_Capability (RoleID, CapabilityID)
values (9,1), (10,2), (11,3), (12,4), (13,5), (14,6);
insert into Role_Capability (RoleID, CapabilityID)
values (15,1), (16,2), (17,3), (18,4), (19,5), (20,6);
insert into Role_Capability (RoleID, CapabilityID)
values (21,1), (22,2), (23,3), (24,4), (25,5), (26,6);
insert into Role_Capability (RoleID, CapabilityID)
values (27,3), (28,4), (29,5), (30,6);
insert into Role_Capability (RoleID, CapabilityID)
values (31,3), (32,4), (33,5), (34,6);
insert into Role_Capability (RoleID, CapabilityID)
values (35,4), (36,5), (37,6);


grant all on CareerLattice.* to user@localhost;