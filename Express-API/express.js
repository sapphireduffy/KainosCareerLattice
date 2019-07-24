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

app.post("/addband", cors(), function (request, response) {
  sendResponseData(bandHandler.createBand(request.body, db), response)
})

app.post("/description", cors(), function (request, response) {
  sendResponseData(descriptionHandler.createDescription(request.body, db), response)
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

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT)
})