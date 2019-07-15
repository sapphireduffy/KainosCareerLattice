const express = require('express');
const app = express();
const db = require('./db');

const portNum = 7999;
app.listen(portNum, function() {
    console.log('Express started successfully on port ' + portNum);
});


function update(coursesReadyFn) {
    db.getAllFromTable(function(rows) {
        courses = rows;
        coursesReadyFn();
    });
}

app.get('/', function(req, res) {
    res.send('<h1>First message from expreess</h1>\n');
    console.log('Request processed');
});
  
dataList = [];
  
app.get('/testtable', function(req, res) {
    update(function() {
    res.send(courses);
    });
});

/*app.post('/addCourse', urlEncode, function(req, res) {
  console.log(req.body);
  db.addCourse(req.body, function(insertedKey) {
    updateCourses(function() {
      res.send(courses);
    });
  });
});*/