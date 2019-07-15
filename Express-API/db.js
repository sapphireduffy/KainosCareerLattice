const mysql = require('mysql');

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'test_db'
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to MySQL");
});

exports.getAllFromTable = function (callback) {
    console.log("Fetched data from table");
    db.query(
        "SELECT id, name, age FROM test_table;",
        function (err, rows) {
            if (err, rows) {
                callback(rows);
            }
        }
    );
};

/*exports.addCourse = function (course, callback) {
    console.log("Add course executed: " + course);
    db.query (
        'INSERT INTO Course SET ?', course,
        function(err, rows) {
            console.log("Added course");
            if(err, rows) {
                callback(rows);
            }
        }
    );
}*/