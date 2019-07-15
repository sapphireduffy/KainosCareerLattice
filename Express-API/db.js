var mysql = require('mysql');

class Database {
    constructor( config ) {
        this.con = mysql.createConnection({
            host: 'localhost',
            user: 'empuser2',
            password: 'empPwd!',
            database: 'BookingSystem'
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