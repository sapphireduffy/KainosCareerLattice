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

app.get("/", function(req, res) {
  res.sendFile("seeCourses.html", { root: __dirname });
});

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
