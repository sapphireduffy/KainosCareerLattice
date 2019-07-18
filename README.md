# Kainos Career Lattice

# Secret files
All secret files must be moved to ther root directory of the project after cloning

# If the node-modules are not present in Express-Api & Angular;

<h1>Express package list</h1>
Change to Express-API directory and 'npm install' the following
<ul>
  <li>mysql</li>
  <li>jsonwebtoken</li>
  <li>bcrypt</li>
  <li>path</li>
  <li>cors</li>
</ul>

<h1>Angular package list</h1>
Change to the Angular directory and 'npm install' the following
<ul>
  <li>@angular/cli</li>
  <li>@ng-bootstrap/ng-bootstrap</li>
  <li>ngx-cookie-service</li>
  <li>jsonwebtoken</li>
  <li>axios</li>
  <li>stream</li>
</ul>

Then you need to modify 
```
angular/node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js
```
and modify the following line at the bottom;
```
// old:
node: false,
// new:
node: { crypto: true, stream: true },
```
to fix crypto
