const Database = require("./db.js");
const cors = require("cors");
const express = require("express");
var path = require("path");

const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, "public")));

var db = new Database();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

//Parse JSON bodies (as sent by API clients)
app.use(express.json());

//convert body values into single string
function getValues(array) {
  var values = "VALUES(";
  for (var i = 0; i < array.length; i++) {
    values += "'" + array[i] + "',";
  }
  values = values.substring(0, values.length - 1) + ");";
  return values;
}

function runQuery(startingQuery, values) {
  startingQuery += getValues(values);
  console.log("Running query: \n" + startingQuery);
  db.query(startingQuery).then(rows => {
    console.log(rows);
  });
}

app.get("/roles", cors(), function(request, response) {
  db.query(
    "SELECT * FROM Role WHERE DepartmentID =" +
      JSON.stringify(request.query.departmentID)
  ).then(rows => {
    response.send(rows);
  });
});

app.get("/capabilities", cors(), function(request, response) {
  db.query(
    "SELECT Name FROM Capability WHERE DepartmentID =" +
      JSON.stringify(request.query.departmentID)
  ).then(rows => {
    response.send(rows);
  });
});

app.get("/departments", cors(), function(request, response) {
  db.query(
    "SELECT Name FROM Department WHERE DepartmentID =" +
      JSON.stringify(request.query.departmentID)
  ).then(rows => {
    response.send(rows);
  });
});

app.get("/allData", cors(), function(request, response) {
  db.query(
    "SELECT Department.Name AS 'DepartmentName', Capability.Name AS 'CapabilityName', Role.Name AS 'RoleName' FROM Department JOIN Capability ON Department.DepartmentID = Capability.DepartmentID JOIN Role_Capability ON Role_Capability.CapabilityID = Capability.CapabilityID JOIN Role ON Role_Capability.RoleID = Role.RoleID JOIN Band ON Role.BandID = Band.BandID WHERE Department.DepartmentID=" +
    JSON.stringify(request.query.departmentID)
  ).then(rows => {
    response.send(rows);
  });
});

app.get("/", function(req, res) {
  res.sendFile("seeCourses.html", { root: __dirname });
});

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
