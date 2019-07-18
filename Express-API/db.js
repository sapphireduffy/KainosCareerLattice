var mysql = require("mysql");
var CONFIG = require("../config.json");

class Database {
  constructor(config) {
    this.con = mysql.createConnection({
      host: CONFIG.host,
      user: CONFIG.user,
      password: CONFIG.password,
      database: CONFIG.database
    });

    this.con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
  }

  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.con.query(sql, args, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }
}

module.exports = Database;
