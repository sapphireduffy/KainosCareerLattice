const createCapabilityQuery = "INSERT INTO capability(name, department_id) VALUES (?,?) "
class CapabilityHandler {
    constructor( config ) { }
    createCapability(params, db){
        return new Promise( ( resolve, reject ) => {
            console.log(createCapabilityQuery);
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
}
module.exports = CapabilityHandler;