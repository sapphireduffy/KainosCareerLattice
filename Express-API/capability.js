const createCapabilityQuery = "INSERT INTO capability(name, department_id) VALUES (?,?) "
const getCapabiltiiesQuery = "SELECT name, capability_id FROM capability WHERE department_id = ?"
const getCapabilityQuery = "SELECT CapabilityName, LeadName, message FROM viewCapabilityDetails WHERE capability_id = ?"

class CapabilityHandler {
    constructor( config ) { }

    createCapability(params, db){
        return new Promise( ( resolve, reject ) => {
            try {
                db.query(createCapabilityQuery,[params.name,params.departmentId]).then(rows => {
                    console.log("SUCESSFULLY ADDED CAPABILITY")
                    resolve({"success":"Successfully added capability"})
                })
            } catch (err){
                reject({"error":"Error adding capability"})
            }
        })
    }

    getCapabiltiies(params, db){
        return new Promise( ( resolve, reject ) => {
            try {
                db.query(getCapabiltiiesQuery,[params.departmentID]).then(rows => {
                    resolve(rows)
                })
            } catch (err){
                reject({"error":"Error getting capabilities"})
            }
        })
    }

    getCapability(params, db){
        return new Promise( ( resolve, reject ) => {
            try {
                db.query(getCapabilityQuery,[params.capabilityId]).then(rows => {
                    resolve(rows)
                })
            } catch (err){
                reject({"error":"Error getting capability"})
            }
        })
    }
}
module.exports = CapabilityHandler;