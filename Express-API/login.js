var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
const Database = require('./db.js')
const fs = require('fs');

const saltRounds = 10;

class LoginHandler {
    constructor( config ) { }

    createUser(params, db){
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(params.Password, salt, function(err, hash) {
                db.query("INSERT INTO User(Username, Password, Salt, Type) VALUES (?,?,?,?) ",
                        [params.Username,hash,salt,'Employee']).then(rows => {
                    console.log("USER ADDED")
                })
            });
        });
    }

    login(params, db){
        console.log("LOGIN")
        db.query("SELECT Password,Salt,Type FROM User WHERE Username = ? ",[params.Username]).then(rows => {
            console.log(rows)
            var password = rows[0].Password
            var type = rows[0].Type
            bcrypt.compare(params.Password, password, function(err, res) {
                console.log(res)
                if(res){
                    jwt.sign({ Username: params.Username, Type: rows[0].Type }, fs.readFileSync('./private.key', 'utf8'), { algorithm: 'RS256' }, function(err, token) {
                        console.log("token generated")
                        return token
                    });
                } else {
                    return false
                }
            })
        })
    }
}

module.exports = LoginHandler;