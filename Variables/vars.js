var dotenv = require('dotenv')

//var env = process.env.TEST

module.exports.getVars = function(path){
    dotenv.config({path: path})
    return process.env
}