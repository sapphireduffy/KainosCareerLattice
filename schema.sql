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

CREATE TABLE band_description (
	description_id INT PRIMARY KEY AUTO_INCREMENT,
    commercial_awareness VARCHAR(1000),
    communicating_and_teamwork VARCHAR(1000),
    innovation_and_continuous_improvement VARCHAR(1000),
    customer_focus VARCHAR(1000),
    developing_yourself_and_others VARCHAR(1000),
    planning_and_organising VARCHAR(1000),
    job_specific_knowledge VARCHAR(1000)
);

CREATE TABLE band (
    band_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    school_id INT,
    description_id INT NOT NULL,
    training MEDIUMTEXT,
    responsibilities MEDIUMTEXT,
    priority_in_school INT,
    FOREIGN KEY (school_id)
        REFERENCES school (school_id),
	FOREIGN KEY (description_id)
        REFERENCES band_description (description_id)
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
    summary VARCHAR(1000),
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
        REFERENCES role (role_id)
        ON DELETE CASCADE,
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
SELECT department.department_id, department.name AS 'DepartmentName', band.band_id, band.name AS 'BandName', 
capability.capability_id, capability.name AS 'CapabilityName', role.role_id, role.name AS 'RoleName', band.school_id
FROM department JOIN capability ON department.department_id = capability.department_id JOIN role_capability ON
role_capability.capability_id = capability.capability_id JOIN role ON role_capability.role_id = role.role_id JOIN band
ON band.band_id = role.band_id 
ORDER BY band.band_id ASC, capability.capability_id ASC;

CREATE VIEW viewBandData AS
SELECT band.band_id, band.priority_in_school, band.name, band.school_id, band.description_id,commercial_awareness, communicating_and_teamwork, innovation_and_continuous_improvement,
customer_focus, developing_yourself_and_others, planning_and_organising, job_specific_knowledge
FROM band JOIN  band_description ON band.description_id = band_description.description_id;

CREATE VIEW viewEditRole AS
SELECT role.role_id, role.name AS 'RoleName', summary, job_spec_url, capability.capability_id, capability.name AS 'CapabilityName', 
band.band_id, band.name AS 'BandName', band.school_id
FROM role JOIN role_capability ON role.role_id = role_capability.role_id JOIN capability ON capability.capability_id = 
role_capability.capability_id JOIN band ON band.band_id = role.band_id;

-- ---------------------------------- INSERTS ---------------------------- --

INSERT INTO user (username, password, type)
VALUES ('employee@kainos.com', '$2b$10$GEAEIw3jp4OxKlaLtUuxFuCAWKebSmUxX8ZuJfUugVaNLjE50sORG', 'Employee');
INSERT INTO user (username, password, type)
VALUES ('admin@kainos.com', '$2b$10$qBQmrmL04mQ1cog6P.zdqeFb6aT1s.ZPIqxYva03L0CYVR9q26xgi', 'Admin');

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

INSERT INTO band_description (commercial_awareness, communicating_and_teamwork, innovation_and_continuous_improvement,
	customer_focus, developing_yourself_and_others, planning_and_organising, job_specific_knowledge)
VALUES ('\nAnticipates changes in the Kainos marketplace when budgeting for the future', '\nCreates successful alignment between diverse teams across the organisation', null, 'Includes all Customer Focus indicators from lower Job Levels', '\nIntegrates people development in their business plans\nMatches long term business needs with the career development and job fulfilment of staff\nDevelops the whole business through learning and development', '\nSets a clear sense of direction, forward thinking and responsibly shapes the future', null  );
INSERT INTO band_description (commercial_awareness, communicating_and_teamwork, innovation_and_continuous_improvement,
	customer_focus, developing_yourself_and_others, planning_and_organising, job_specific_knowledge)
VALUES (null, null, null, null, null, null, null);
INSERT INTO band_description (commercial_awareness, communicating_and_teamwork, innovation_and_continuous_improvement,
	customer_focus, developing_yourself_and_others, planning_and_organising, job_specific_knowledge)
VALUES ('\nYou take a balanced view of wider impact on the organisation when making significant changes\nYou strive to add measurable and significant value to the longer term growth of Kainos and take calculated risks in order to do so.\nYou influence and negotiate creating commercial strategies that maximise return, reduce cost and drive improvement in quality', '\nYou achieve widely accepted \'buy in\' by explaining benefits at both individual and department level\nYou build collaborative partnerships across the company\nYou build cohesive formal and informal teams and networks across the organisation which deliver significant added value\nYou lead the implementation of changes with a positive approach delivering and respecting the need for the company message\nYou understand the culture and proactively instil within your team, understanding what is and not possible to achieve within the organisation\nYou build capability, processes and structures to speed the development of skills and the future leaders so the business can scale sustainably.', '\nYou create strategies that introduce improvements across your business unit and the Kainos group', '\nYou anticipate customer\'s future needs, identifies their key strategic issues and positively challenges unfounded assumptions\nYou create mutually supportive and loyal relationships with all major customers\nYou see the wider picture, understand the levels of service that are valued by customers and ensures that these are the priority at all times\nYou understand and apply sector-wide standards\n', 'You create an environment which encourages continuous learning and development and have led and contributed to the development of capability across the group\nYou actively sponsor and participate MAP training programmes to ensure that the skills required by the business are available to drive future growth\nYou take accountability for ensuring that there is a clear talent pipeline within your area of responsibility\nYou are an active role model ensuring that each of your direct reports are managed in accordance with the talent management process eg performance reviews/retention/succession/career development plans are in place.\nYou ensure that the group management processes are actively adapted by all members of staff within your responsibility.', '\nYou plan effectively for the medium and long term, reviewing strategies and revising to meet changing business needs\nYou actively make use of management information available in order to understand issues\nYou liaises effectively with colleagues outside of immediate team to coordinate activities and encourage your team to participate with others outside your team and BU where appropriate\nYou produce a consistent, \'no blame\' culture, with a feeling of pride and achievement', '\nYou anticipate and understand future trends in functional or technical skills and process\nYou actively drive the necessary changes to role and learning requirements to ensure the Company is best placed to adapt to new challenges\nYou demonstrates an outstanding level of accomplishment in job performance');
INSERT INTO band_description (commercial_awareness, communicating_and_teamwork, innovation_and_continuous_improvement,
	customer_focus, developing_yourself_and_others, planning_and_organising, job_specific_knowledge)
VALUES ('\nYou put forward sound business cases to gain support for new and more effective methods of working\nYou prioritise actions to minimise costs and maximise advantage across the organisation\nYou understand the need to demonstrate a return on investment in activities and identify opportunities for generating income\nYou actively pursue alternative ideas and ways of working to gain cost savings\nYou lead successful initiatives that create a positive image of Kainos with potential to generate more income\nYou support the company\'s commercial decisions and ensure that your team understand the reasons for these decisions', '\nYou role model company values, even when there is significant risk in doing so\nYou address issues within your team and deliver difficult conversations when staff expectations need aligned or behaviours do not reflect the Kainos values', '\nYou understand that proposed innovation and changes should have a clear link to improving the business results delivered\nYou set standards for quality and ensures best practice', '\nYou manage expectations so customers always feels valued and have a positive experience of Kainos\nYou champion customer service improvement initiative', '\nYou tailor development approaches to suit the needs of each team member\nYou identify potential developmental opportunities for individuals within your team, making them happen whilst managing the impact within your team', '\nYou organise people and resources to successfully achieve both short and medium term objectives\nYou confidently juggle complex projects of different size and priority', 'You provide opportunities for others to learn functional and technical skills and concepts\nYou apply advanced functional or technical knowledge to process innovation and complex problem solving');
INSERT INTO band_description (commercial_awareness, communicating_and_teamwork, innovation_and_continuous_improvement,
	customer_focus, developing_yourself_and_others, planning_and_organising, job_specific_knowledge)
VALUES ('\nYou look beyond immediate problems/issues to see the impact on the bigger picture\nYou use financial information to find pragmatic new ways of saving cost/effort without reducing throughput', 'You recognise and build on individual strengths of colleagues/team members\nYou build relationships based on trust', 'You invite regular feedback on performance from team members and customers\nYou quickly turn new ideas into clear and effective improvements', '\nYou assess your customer needs accurately by listening and applying sensitive questioning\nYou manage customer expectations in relation to scope of work being honest with what can and cannot be achieved within timelines', 'You consistently give constructive feedback to others in relation to the performance areas for improvement\nYou make independent decisions and are able to \'get on with the job\' escalating decisions only when appropriate', '\nYou motivate and encourage others to achieve planned results\nIf appropriate to role, you manage your team effectively, delegating work to use people and resources to best effect', '\nYou choose appropriate tools or technology for solutions; experiments with new processes, tools, or technologies to determine applicability\nYou apply advanced functional or technical knowledge to do your job at a high level of accomplishment');
INSERT INTO band_description (commercial_awareness, communicating_and_teamwork, innovation_and_continuous_improvement,
	customer_focus, developing_yourself_and_others, planning_and_organising, job_specific_knowledge)
VALUES ('\nYou understand how the company makes profit and how your role affects profitability of the company\nYou create honest time estimates and are determined to deliver upon these', '\nYou use honest data and facts in a clear and constructive way to support arguments and gain agreement\nYou are open to giving and receiving honest feedback in order to highlight areas for improvement and recognise high performance.', '\nYou proactively look for creative/better ways of doing things and put forward improvements in order to improve performance\nYou identify problems, carefully consider and test possible options, evaluate pros and cons and consequences of various decisions and create a range of solutions', '\nYou respond honestly and promptly to customer requests and whenever possible within agreed timeframes\nYou keep promises made to your customer', '\nYou identify your learning and development needs and actively seek opportunities to gain this experience\nYou seek and respond positively to feedback regarding your own learning and development', '\nYou overcome obstacles to ensure work gets done on time\nYou effectively prioritise workload to meet important objectives', '\nYou have the capability and knowledge base to share job specific skills with others\nYou demonstrate an active interest in enhancing current skills and learning new ones');
INSERT INTO band_description (commercial_awareness, communicating_and_teamwork, innovation_and_continuous_improvement,
	customer_focus, developing_yourself_and_others, planning_and_organising, job_specific_knowledge)
VALUES('\nYou understand the contribution your role makes to the success of the business, consistently delivering to task deadlines\nYou understand and the need for the business to generate additional income and respect that costs need to be managed', '\nYou get involved at meetings, ask questions, listen and give honest information when appropriate.\nYou actively participate and cooperate within the team helping others and sharing workload.', '\nYou actively seek out colleagues in order to share thoughts and ideas that may be use or interest to them\nYour share your ideas (creative) with colleagues and seek support from management in developing those ideas', '\nYou know who your customer is and what problem the team is trying to solve\nYou consistently strive to provide a quality service and showcase Kainos positively', '\nYou seek out new challenges that may stretch your abilities\nYou learn from people and ask for their ideas and opinions.', '\nYou plan your time effectively and consistently meet task deadlines\nYou keep honest records of your achievements to discuss with your manager during your 1-2-1', '\nYou respect the need for you to do your role well and actively learn the functional and technical knowledge\nYou use appropriate tools, technology or process for the task');
INSERT INTO band_description (commercial_awareness, communicating_and_teamwork, innovation_and_continuous_improvement,
	customer_focus, developing_yourself_and_others, planning_and_organising, job_specific_knowledge)
VALUES('\nYou consistently cooperate with the business processes completing accurately and honestly e.g. timesheets/EOY review/travel requests\nYou willingly cooperate by volunteering to take on additional tasks that will benefit the business e.g. Recruitment events such as University careers fairs, EAYL open evening, Work experience mentoring', '\nYou are open and honest in your opinions.\nYou respect others by attending meetings on time and contributing where appropriate', '\nYou seek advice where appropriate\nYou actively cooperate with the team and contribute to team discussions about improvement.', '\nYou act in accordance with the Kainos values demonstrating through your behaviours and interactions with colleagues and customers', '\nYou are flexible and willing to learn\nYou set SMART objectives in Workday and discuss and agree with your manager', '\nYou make sure that you understand the task that you are required to deliver and escalate to your manager if you are unsure of what is required from you\nYou understand the timelines for your tasks and plan your time effectively to ensure that deadlines are met', '\nYou actively cooperate and participate in training completing all pre and post training work\nYou understand the investment that the company has made in you and set personal development goals to allow you to address gaps and advance to an Associate level within 18 months of joining the company');
INSERT INTO band_description (commercial_awareness, communicating_and_teamwork, innovation_and_continuous_improvement,
	customer_focus, developing_yourself_and_others, planning_and_organising, job_specific_knowledge)
VALUES (null, null, null, null, null, null, null);

INSERT INTO band (name, school_id, description_id, priority_in_school) -- All Bands
VALUES ('Executive', 1, 1, 1), ('Leadership Executive', 1, 2, 2), ('Principal', 1, 3, 3), ('Manager', 2, 4, 1), ('Consultant', 2, 5, 2),
('Senior Associate', 2, 6, 3), ('Associate', 3, 7, 1), ('Trainee', 3, 8, 2), ('Apprentice', 3, 9, 3);

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