var mysql = require('mysql');
var CONFIG = require('./config.json');

class Database {
    constructor( config ) {
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

    query(sql, values){
        return new Promise( ( resolve, reject ) => {
            console.log("sql query")
            this.con.query( sql, values, ( err, rows ) => {
                if ( err ){
                    console.log(err)
                    return reject( err );
                }
                resolve( rows );
            } );
        } );
    }

    escape(field){
        return this.con.escape(field);
    }
}

module.exports = Database;