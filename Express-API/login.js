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
       var promise = new Promise( ( resolve, reject ) => {
            console.log("LOGIN")
            db.query("SELECT Password,Salt,Type FROM User WHERE Username = ? ",[params.Username]).then(rows => {
                console.log(rows)
                console.log(rows.length)
                if(rows.length > 0){
                    var password = rows[0].Password
                    bcrypt.compare(params.Password, password, function(err, res) {
                        console.log(res)
                        if(res){
                            var privateKey = "MIIBOQIBAAJBALGl6FHDEQVgmKFfZhSCdUfKjnGUv/g38++jeSso7CRF+j5oMBrS"
                            jwt.sign({ Username: params.Username, Type: rows[0].Type }, privateKey, function(err, token) {
                                console.log("token generated: "+token)
                                resolve({"token" : token})
                            });
                        } else {
                            reject ({"error":"Password invalid"})
                        }
                    })
                } else {
                    reject ({"error":"Username invalid"})
                }
            })
        })

        return promise
    }
}

module.exports = LoginHandler;