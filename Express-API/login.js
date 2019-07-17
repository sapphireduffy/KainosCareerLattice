var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var key = require('./privateKey.js')
const saltRounds = 10;

class LoginHandler {
    constructor( config ) { }

    createUser(params, db){
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(params.Password, salt, function(err, hash) {
                db.query("INSERT INTO user(username, password, type) VALUES (?,?,?) ",
                        [params.Username,hash,'Employee']).then(rows => {
                    console.log("USER ADDED")
                })
            });
        });
    }

    login(params, db){
       var promise = new Promise( ( resolve, reject ) => {
            console.log("LOGIN")
            db.query("SELECT password,type FROM user WHERE username = ? ",[params.Username]).then(rows => {
                if(rows.length > 0){
                    var password = rows[0].password
                    bcrypt.compare(params.Password, password, function(err, res) {
                        console.log(res)
                        if(res){
                            jwt.sign({ Username: params.Username, Type: rows[0].type }, key.privateKey, function(err, token) {
                                console.log("token generated: "+token)
                                resolve(token)
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