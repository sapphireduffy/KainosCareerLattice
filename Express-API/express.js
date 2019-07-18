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
    "SELECT name, capability_id FROM capability WHERE department_id = ?",
    [request.query.departmentID]
  ).then(rows => {
    response.send(rows);
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

app.get("/rolesInDep", cors(), function(request, response) {
  db.query(
    "SELECT * FROM viewTableData WHERE department_id = ?",
    [request.query.departmentID]
  ).then(rows => {
    response.send(rows);
  });
});

app.get("/bands", cors(), function(request, response) {
  db.query(
    "SELECT * FROM band"
  ).then(rows => {
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

app.get("/role", cors(), function(request, response) {
  db.query(
    "SELECT role_id, name, summary, job_spec_url FROM role WHERE role_id = ?",
      [request.query.roleID]
  ).then(rows => {
    response.send(rows);
  });
});

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
