var mysql = require('mysql');
var config = require('./config.json');

class Database {
    constructor( config ) {
        this.con = mysql.createConnection({
            host: config.host,
            user: config.user,
            password: config.password,
            database: config.database
        });

        this.con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        });
    }

    query(sql, args){
        return new Promise( ( resolve, reject ) => {
            this.con.query( sql, args, ( err, rows ) => {
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
}

module.exports = Database;