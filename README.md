# Kainos Career Lattice

# Secret files
All secret files must be moved to ther root directory of the project after cloning

# If the node-modules are not present in Express-Api & Angular;

<h2>Express package list</h2>
Change to Express-API directory and run the following
```
npm install mysql jsonwebtoken bcrypt path cors
```

<h2>Angular package list</h2>
Change to the Angular directory run the following
```
npm install @angular/cli @ng-bootstrap/ng-bootstrap ngx-cookie-service jsonwebtoken axios stream
```

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
