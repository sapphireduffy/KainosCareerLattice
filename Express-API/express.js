const Database = require('./db.js')
const LoginHandler = require('./login.js')
const cors = require('cors')
const express = require('express')
var path = require('path')

const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, "public")));

var db = new Database();
var loginHandler = new LoginHandler();
//loginHandler.createUser({Username : "test2", Password: "pass"}, db) 

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

//Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get("/roles", cors(), function(request, response) {
  db.query(
    "SELECT role_id, name, department_id, band_id FROM role WHERE department_id = ?",
      [request.query.departmentID]
  ).then(rows => {
    response.send(rows);
  });
});

app.get("/capabilities", cors(), function(request, response) {
  db.query(
    "SELECT name FROM capability WHERE department_id = ?",
      [request.query.departmentID]
  ).then(rows => {
    response.send(rows)
  });
});

app.get("/departments", cors(), function(request, response) {
  db.query(
    "SELECT name FROM department WHERE department_id = ?",
      [request.query.departmentID]
  ).then(rows => {
    response.send(rows);
  });
});

app.get("/allData", cors(), function(request, response) {
  db.query(
    "SELECT department.name AS 'DepartmentName', capability.name AS 'CapabilityName', role.name AS 'RoleName' "+
    "FROM department JOIN capability ON department.department_id = capability.department_id JOIN role_capability "+
    "ON role_capability.capability_id = capability.capability_id JOIN role ON role_capability.role_id = role.role_id "+
    "JOIN band ON role.band_id = band.band_id WHERE department.department_id= ?",
    [request.query.departmentID]
  ).then(rows => {
    console.log(request.query.departmentID)
    response.send(rows);
  });
});

app.post('/login', cors(), function (request, response) {
	console.log(request.body);
	console.log(request.body.Password)
	loginHandler.login(request.body, db).then(token => {
    //console.log(token)
    response.cookie('token',token)
		response.send({'token':token})
	}, reason => {
		//console.log(reason)
		response.send(reason)
	})
});

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
