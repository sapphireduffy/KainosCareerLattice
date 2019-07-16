const Database = require('./db.js')
const cors = require('cors')
const express = require('express')
var path = require('path')

const app = express();
const PORT = 8000

app.use(express.static(path.join(__dirname, 'public')));

var db = new Database();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

//Parse JSON bodies (as sent by API clients)
app.use(express.json());

//convert body values into single string
function getValues(array) {
	var values = "VALUES(";
	for (var i = 0; i < array.length; i++) {
		values += "'" + array[i] + "',"
	}
	values = values.substring(0, values.length - 1) + ");"
	return values
}

function runQuery(startingQuery, values) {
	startingQuery += getValues(values)
	console.log("Running query: \n" + startingQuery);
	db.query(startingQuery).then(rows => {
		console.log(rows)
	})
}

function bookCourse(body) {
	//Create new Query and format it to string
	var query = 'INSERT INTO Employee_Course(CourseID, Name, Email) ';
	var array = [body.CourseID, body.Name, body.Email]
	runQuery(query, array)
	return true;
}

app.get('/courses', cors(), function (request, response) {
	db.query("SELECT * FROM Course").then(rows => {
		response.send(rows)
	})
});

app.post('/bookcourse', cors(), function (request, response) {
	console.log(request.body);
	var ans = bookCourse(request.body);
	response.send("<html><script>alert('Successfully booked course')</script><meta http-equiv=\"refresh\" content=\"1; url=http://127.0.0.1:8000/\"></html>");
});

app.get('/', function (req, res) {
	res.sendFile('landing-page.component.html', { root: __dirname });
});

app.listen(PORT, () => {
	console.log('Server is running on PORT:', PORT);
});