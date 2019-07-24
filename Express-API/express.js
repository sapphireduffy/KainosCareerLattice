const cors = require('cors')
const express = require('express')

const app = express()
const PORT = 8000

const Database = require('./db.js')
const LoginHandler = require('./login.js')
const RolesHandler = require('./roles.js')
const CapabilityHandler = require('./capability.js')
const BandHandler = require('./band.js')
const DepartmentHandler = require('./department.js')
const db = new Database()
const loginHandler = new LoginHandler()
const rolesHandler = new RolesHandler()
const capabilityHandler = new CapabilityHandler()
const bandHandler = new BandHandler()
const departmentHandler = new DepartmentHandler()

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded())
//Parse JSON bodies (as sent by API clients)
app.use(express.json())

const rolesQuery = "SELECT role_id, name, department_id, band_id FROM role WHERE department_id = ?"
const capabilitiesQuery = "SELECT name, capability_id FROM capability WHERE department_id = ?"
const departmentsQuery = "SELECT name FROM department WHERE department_id = ?"
const rolesInDepQuery = "SELECT * FROM viewTableData WHERE department_id = ?"
const bandsQuery = "SELECT * FROM band"
const getRoleQuery = "SELECT role_id,name,summary,job_spec_url,school_id FROM viewRoleData WHERE role_id = ?"
const capabilityNameQuery = "SELECT name FROM capability WHERE capability_id = ?"
const bandNameQuery = "SELECT name FROM band WHERE band_id = ?"
const viewEditRole = "SELECT role_id, capability_id, band_id, RoleName, summary, job_spec_url, CapabilityName, BandName FROM viewEditRole WHERE role_id = ?"


const tokenCookieName = 'token'

app.delete('/deleteRole', cors(), function (request, response) {
  console.log(request.body)
	rolesHandler.deleteRole(request.body, db).then(result => {
    console.log(result)
    response.send(result)
  }, reject => {
    response.send(reject)
  })
});

app.post('/addrole', cors(), function (request, response) {
	rolesHandler.createRole(request.body, db).then(result => {
const tokenCookieName = "token"

function sendResponseData(query, response){
  query.then(result => {
    response.send(result)
  }, reject => {
    response.send(reject)
  })
}

app.post("/addrole", cors(), function (request, response) {
	sendResponseData(rolesHandler.createRole(request.body, db), response)
})

app.post("/addcapability", cors(), function (request, response) {
  sendResponseData(capabilityHandler.createCapability(request.body, db), response)
})

app.get("/roles", cors(), function(request, response) {
  sendResponseData(rolesHandler.getRolesInDept(request.query, db), response)
})

app.get("/capabilities", cors(), function(request, response) {
  sendResponseData(capabilityHandler.getCapabiltiies(request.query, db), response)
})

app.get("/uniqueband", cors(), function(request, response) {
  sendResponseData(bandHandler.getBands(request.query, db), response)
})

app.get("/departments", cors(), function(request, response) {
  sendResponseData(departmentHandler.getDepartments(request.query, db), response)
})

app.get("/rolesInDep", cors(), function(request, response) {
  sendResponseData(rolesHandler.getFullRole(request.query, db), response)
})

app.get("/bands", cors(), function(request, response) {
  sendResponseData(bandHandler.allBands(db), response)
})

app.post("/login", cors(), function (request, response) {
	loginHandler.login(request.body, db).then(token => {
    response.cookie(tokenCookieName,token)
		response.send({tokenCookieName:token})
	}, reason => {
		response.send(reason)
	})
})

app.get("/role", cors(), function(request, response) {
  sendResponseData(rolesHandler.getRoleViewData(request.query, db), response)
})

app.get("/viewEditRole", cors(), function(request, response) {
  db.query(viewEditRole,[request.query.roleID]).then(rows => {
    response.send(rows);
  });
});


app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT)
})
