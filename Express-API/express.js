const cors = require('cors')
const express = require('express')
var path = require('path')

const app = express()
const PORT = 8000

const Database = require('./db.js')
const LoginHandler = require('./login.js')
const RolesHandler = require('./roles.js')
const CapabilityHandler = require('./capability')
const db = new Database()
const loginHandler = new LoginHandler()
const rolesHandler = new RolesHandler()
const capabilityHandler = new CapabilityHandler()

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded())

//Parse JSON bodies (as sent by API clients)
app.use(express.json())

const rolesQuery = "SELECT role_id, name, department_id, band_id FROM role WHERE department_id = ?"
const capabilitiesQuery = "SELECT name, capability_id FROM capability WHERE department_id = ?"
const departmentsQuery = "SELECT name FROM department WHERE department_id = ?"
const rolesInDepQuery = "SELECT * FROM viewTableData WHERE department_id = ?"
const bandsQuery = "SELECT * FROM band"
const getRoleQuery = "SELECT role_id, name, summary, job_spec_url FROM role WHERE role_id = ?"

const tokenCookieName = 'token'

app.post('/addrole', cors(), function (request, response) {
	rolesHandler.createRole(request.body, db).then(result => {
    response.send(result)
  }, reject => {
    response.send(reject)
  })
});

app.post('/addcapability', cors(), function (request, response) {
  capabilityHandler.createCapability(request.body, db).then(result => {
    response.send(result)
  }, reject => {
    response.send(reject)
  })
});

app.get("/roles", cors(), function(request, response) {
  db.query(rolesQuery,[request.query.departmentID]).then(rows => {
    response.send(rows);
  });
});

app.get("/capabilities", cors(), function(request, response) {
  db.query(capabilitiesQuery,[request.query.departmentID]).then(rows => {
    response.send(rows);
  });
});

app.get("/uniqueband", cors(), function(request, response) {
  db.query(
    "SELECT * FROM viewBandData WHERE band_id = ?",
    [request.query.bandId]
  ).then(rows => {
    response.send(rows);
  });
});

app.get("/departments", cors(), function(request, response) {
  db.query(departmentsQuery,[request.query.departmentID]).then(rows => {
    response.send(rows);
  });
});

app.get("/rolesInDep", cors(), function(request, response) {
  db.query(rolesInDepQuery,[request.query.departmentID]).then(rows => {
    response.send(rows);
  });
});

app.get("/bands", cors(), function(request, response) {
  db.query(bandsQuery).then(rows => {
    response.send(rows);
  });
});

app.post('/login', cors(), function (request, response) {
	loginHandler.login(request.body, db).then(token => {
    response.cookie(tokenCookieName,token)
		response.send({tokenCookieName:token})
	}, reason => {
		console.log(reason)
		response.send(reason)
	})
});

app.get("/role", cors(), function(request, response) {
  db.query(getRoleQuery,[request.query.roleID]).then(rows => {
    response.send(rows);
  });
});

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});