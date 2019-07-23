# Kainos Career Lattice
An interactive, responsive and accessible application that allows users to view all the different departments, capabilities and job roles within Kainos. 

# Secret files
All secret files must be moved to ther root directory of the project after cloning

# Setup
Run 
```
npm install
```
in both the Angular and Express-API directories

# Project structure

<h2>Components</h2>
Components outline the fundamental code for each page.

<ul>
  <li><b>login</b>: Handles page and login form at /login</li>
  <li><b>landing-page</b>: Handles the landing page with all the departments displayed at /home. (Also directs user to admin-table if in admin mode set via navbar</li>
  <li><b>navbar</b>: Handles the navigation bar. Is customised depending on whether the current user is an employee or admin (set via token) and allows admins to switch between modes (also via token)</li>
  <li><b>career-table</b>: Handles the career table outputting roles for each department. Loads data from backend to populate</li>
  <li><b>admin-table</b>: Handles the admin table which is similar to the career table but allows an admin to add, modify and delete data in the tables. Also displays alerts when changes are made</li>
  
As well as these there are a variety of modal components which create popups;

<ul>
  <li><b>role-information</b>: Handles the role information modal which shows when a role is clicked in career-table. This outputs all information for a role</li>
  <li><b>band-information</b>: Handles the band information modal which shows when a band is clicked in career-table. This outputs all information for a band</li>
  <li><b>add-role-modal</b>: Handles the adding role modal which shows when clicking an empty role position in the admin-table. This allows the admin to enter details and submit to create a new role</li>
  <li><b>edit-role-modal</b>: Handles the editing roel modal which shows when clicking an role in the admin-table. This allows the admin to edit details or delete a given role</li>
</ul>
  
