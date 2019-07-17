const Database = require('./db.js')
const LoginHandler = require('./login.js')
const cors = require('cors')
const express = require('express')
var path = require('path')

const app = express();
const PORT = 8000

app.use(express.static(path.join(__dirname, 'public')));

var db = new Database();

var loginHandler = new LoginHandler(); 
//loginHandler.createUser({"Username": "test2", "Password" : "myPassword"},db);
//loginHandler.login({"Username": "test2", "Password" : "myPassword"},db);

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

//Parse JSON bodies (as sent by API clients)
app.use(express.json());

function bookCourse(body) {
	//Create new Query and format it to string
	var query = 'INSERT INTO Employee_Course(CourseID, Name, Email) VALUES (?,?,?)';
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
	res.sendFile('seeCourses.html', { root: __dirname });
});

app.get('/test', function (req, res) {
	res.send({"abc": 123});
});

app.post('/login', cors(), function (request, response) {
	console.log(request.body);
	console.log(request.body.Password)
	loginHandler.login(request.body, db).then(token => {
		//console.log(token)
		response.send(token)
	}, reason => {
		//console.log(reason)
		response.send(reason)
	})
});

app.listen(PORT, () => {
	console.log('Server is running on PORT:', PORT);
});