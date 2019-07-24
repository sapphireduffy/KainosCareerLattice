const cors = require('cors')
const express = require('express')
var path = require('path')

const app = express()
const PORT = 8000

const Database = require('./db.js')
const LoginHandler = require('./login.js')
const RolesHandler = require('./roles.js')
const db = new Database()
const loginHandler = new LoginHandler()
const rolesHandler = new RolesHandler()

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded())

//Parse JSON bodies (as sent by API clients)
app.use(express.json())

const rolesQuery = "SELECT role_id, name, department_id, band_id FROM role WHERE department_id = ?"
const capabilitiesQuery = "SELECT name, capability_id FROM capability WHERE department_id = ?"
const capabilityNameQuery = "SELECT name FROM capability WHERE capability_id = ?"
const departmentsQuery = "SELECT name FROM department WHERE department_id = ?"
const rolesInDepQuery = "SELECT * FROM viewTableData WHERE department_id = ?"
const bandsQuery = "SELECT * FROM band"
const bandNameQuery = "SELECT name FROM band WHERE band_id = ?"
const getRoleQuery = "SELECT role_id, name, summary, job_spec_url FROM role WHERE role_id = ?"
const viewEditRole = "SELECT role_id, capability_id, band_id, RoleName, summary, job_spec_url, CapabilityName, BandName FROM viewEditRole WHERE role_id = ?"
const RoleBandCapabilityExists = "SELECT EXISTS(SELECT * FROM viewEditRole WHERE capability_id=? AND band_id=?) AS result"


const tokenCookieName = 'token'

app.post('/addrole', cors(), function (request, response) {
  console.log(request.body)
	rolesHandler.createRole(request.body, db).then(result => {
    console.log(result)
    response.send(result)
  }, reject => {
    response.send(reject)
  })
});

app.put('/editrole', cors(), function (request, response) {
  console.log(request.body)
	rolesHandler.editRole(request.body, db).then(result => {
    console.log(result)
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

app.get("/capabilityName", cors(), function(request, response) {
  db.query(capabilityNameQuery,[request.query.capabilityId]).then(rows => {
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

app.get("/bandName", cors(), function(request, response) {
  db.query(bandNameQuery,[request.query.bandId]).then(rows => {
    response.send(rows);
  });
});

app.post('/login', function (request, response) {
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

app.get("/viewEditRole", cors(), function(request, response) {
  db.query(viewEditRole,[request.query.roleID]).then(rows => {
    response.send(rows);
  });
});

app.get("/roleBandCapabilityExists", cors(), function(request, response) {
  db.query(RoleBandCapabilityExists,[request.query.capabilityId, request.query.bandId]).then(rows => {
    response.send(rows);
  });
});


app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});