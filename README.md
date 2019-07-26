# Kainos Career Lattice
An interactive, responsive and accessible application that allows users to view all the different departments, capabilities and job roles within Kainos. 

# Setup
All secret files must be moved to ther root directory of the project after cloning

Run 
```
npm install
```
in both the Angular and Express-API directories.

Then to run the Angular side run
```
npm start
```
in the angular folder to start the app. Then to start the Express side run
```
node express.js
```
in the express-api folder.

Then you can navigate to locahost:4200 in browser to start

# Project structure - Angular
We use angular for the front end structure and processing.

<h2>Components</h2>
Components outline the fundamental code for each page.

<ul>
  <li><b>login</b>: Handles page and login form at /login</li>
  <li><b>landing-page</b>: Handles the landing page with all the departments displayed at /home. (Also directs user to admin-table if in admin mode set via navbar</li>
  <li><b>navbar</b>: Handles the navigation bar. Is customised depending on whether the current user is an employee or admin (set via token) and allows admins to switch between modes (also via token)</li>
  <li><b>career-table</b>: Handles the career table outputting roles for each department. Loads data from backend to populate</li>
  <li><b>admin-table</b>: Handles the admin table which is similar to the career table but allows an admin to add, modify and delete data in the tables. Also displays alerts when changes are made</li>
</ul>
  
As well as these there are a variety of modal components which create popups;

<ul>
  <li><b>role-information</b>: Handles the role information modal which shows when a role is clicked in career-table. This outputs all information for a role</li>
  <li><b>band-information</b>: Handles the band information modal which shows when a band is clicked in career-table. This outputs all information for a band</li>
  <li><b>add-role-modal</b>: Handles the adding role modal which shows when clicking an empty role position in the admin-table. This allows the admin to enter details and submit to create a new role</li>
  <li><b>edit-role-modal</b>: Handles the editing role modal which shows when clicking an role in the admin-table. This allows the admin to edit details or delete a given role</li>
  <li><b>add-capability</b>: Handles the adding a capability modal which shows when clicking an role in the admin-table. This allows the admin to edit details or delete a given capability</li>
</ul>

<h2>Services</h2>
Services perform key processing tasks such as adding and fetching data from the backend.
  
<ul>
  <li><b>data-service</b>: Handles components data requests and uses http-handler to direct requerst to endpoints</li>
  <li><b>http-handler</b>: Handles sending and retrieving data to the backend via various requests</b></li>
  <li><b>modal</b>: Handles creating the different modal types</li>
</ul>

<h2>Other key classes</h2>
<ul>
  <li><b>app.module</b>: Defines the projects imports</li>
  <li><b>app-routing</b>: Defines paths of different pages and their access rights (auth components)</li>
  <li><b>auth-guard</b>: Loads and verifies the token created by login to ensure validity of user session before allowing user to access pages (canActivate method)</li>
  <li><b>admin-auth-guard</b>: Similar to auth-guard but ensures user is an admin to access admin features. Will allow access to admin pages if an admin user and in admin mode (admin is selected in navigation bar)</li>
</ul>
  
# Project structure - Express
We use express for the backend processing.

<h2>Classes</h2>
<ul>
  <li><b>express.js</b>: The main class of the express backend. Defines the request paths for all GET and POST requests and what to return.</li>
  <li><b>db.js</b>: The class responsible for handling the database with a query methodwhich executes SQL prepared statements</li>
  <li><b>login.js</b>: The class responsible for login handling including creating users (not accessible via site) and verifying login. Uses jsonwebtoken and bcrypt (see later)</li>
</ul>

The remaining classes define the process for interacting with the various entities we hold;
<ul>
  <li><b>band.js</b>: Responsible for executing band related requests such as inserting, updating and deleting</li>
  <li><b>department.js</b>: Responsible for executing department related requests such as inserting, updating and deleting</li>
  <li><b>roles.js</b>: Responsible for executing role related requests such as inserting, updating and deleting</li>
  <li><b>capability.js</b>: Responsible for executing capability related requests such as inserting, updating and deleting</li>
</ul>

Also in the repsoitory is the <b>schema.sql</b> which holds all the SQL for the database.

# Project structure - Protractor Tests
Protractor tests the site through a browser to verify the behaviours of the application.
<b>conf.js</b> holds the configuration for these tests.

To run these tests firstly run 
```
npm start
```
in the Protractor directory to install the neccersairy libraries. Then run
```
webdriver-manager start
```
to start the webdriver host. Also start the application (angular and express) at this stage. Then to execute the tests run
```
protractor conf.js
```
in the protractor directory to run the tests. The tests for the different pages are all defined in seperate js files which are called by <b>tests.js</b>

We also have unit tests declared in angular which can be run using
```
npm test
```
in the angular directory

# Libraries
A list of all the libraries we need for the project (already handles by package.json in both folders)

<ul>
  <li><b>@angular/core</b> (angular)</li>
  <li><b>@ng-bootstrap/ng-bootstrap</b> (angular): Library for angular bootstrap</li>
  <li><b>bcrypt</b> (express): Library for hashing and salting passwords</li>
  <li><b>cors</b> (express): Library for handling cors errors. No longer needed thanks to proxy <b>(to be removed)</b></li>
  <li><b>express</b> (express)</li>
  <li><b>jsonwebtoken</b> (angular & express): Library for creating, reading and validating web tokens which handles the user session</li>
  <li><b>mysql</b> (express): Library for connecting to mySQL database</li>
  <li><b>ngx-cookie-service</b> (angular): Library for reading cookies in angular</li>
</ul>

# Secret files
For the project to work you also need three hidden files;
<ul>
  <li><b>privatekey</b>: The secret private key used for encrypting the session tokens</li>
  <li><b>config.json</b>: The properties file containing database credentials</li>
  <li><b>login.json</b>: A properties file containing login credentials for the protractor tests to login</li>
</ul>
For obvious reasons these aren't in the repo. You should copy these files to the root directory of the project.
