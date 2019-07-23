const createRoleQuery = "INSERT INTO role(name, department_id, band_id, summary, job_spec_url) VALUES (?,?,?,?,?) "
const createRoleCapabilityLinkQuery = "INSERT INTO role_capability(role_id,capability_id) VALUES (?,?) "

class RolesHandler {
    constructor( config ) { }

    createRole(params, db){
        return new Promise( ( resolve, reject ) => {
            try {
                db.query(createRoleQuery,[params.roleName,params.departmentId,params.bandId,params.summary,params.jobSpecUrl]).then(rows => {
                    console.log(rows.insertId)
                    db.query(createRoleCapabilityLinkQuery,[rows.insertId,params.capabilityId]).then(result => {
                        console.log("SUCESSFULLY ADDED ROLE")
                        resolve({"success":"Successfully added role"})
                    })
                })
            } catch (err){
                reject({"error":"Error adding role"})
            }
        })
    }
}
module.exports = RolesHandler