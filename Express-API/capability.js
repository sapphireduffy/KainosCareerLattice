const createCapabilityQuery = "INSERT INTO capability(name, department_id) VALUES (?,?) "
const getCapabiltiiesQuery = "SELECT name, capability_id FROM capability WHERE department_id = ?"
const getCapabilityQuery = "SELECT name, capability_id, department_id FROM capability WHERE capability_id = ?"
const editCapabilityQuery = "UPDATE capability SET name=?, department_id=? WHERE capability_id=?"
const capabilityExistsQuery = "SELECT EXISTS(SELECT * FROM capability WHERE name=? AND department_id=?) AS result"

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

    getCapabilties(params, db){
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
                db.query(getCapabilityQuery,[params.capabilityID]).then(rows => {
                    resolve(rows)
                })
            } catch (err){
                reject({"error":"Error getting capability"})
            }
        })
    }

    editCapability(params, db) {
        return new Promise( ( resolve, reject ) => {
            try {
                db.query(editCapabilityQuery,[params.name,params.departmentId,params.capabilityId]).then(rows => {
                    resolve({"success":"Successfully edited capability"})
                })
            } catch (err){
                reject({"error":"Error editing capability"})
            }
        })
    }

    capabilityExists(params, db) {
    return new Promise( ( resolve, reject ) => {
        try {
            db.query(capabilityExistsQuery,[params.capabilityName, params.departmentID]).then(rows => {
                resolve(rows)
            })
        } catch (err){
            reject({"error":"Error getting capability information"})
        }
    })
}
}

module.exports = CapabilityHandler;