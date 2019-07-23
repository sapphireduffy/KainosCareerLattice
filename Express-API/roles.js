const createRoleQuery = "INSERT INTO role(name, department_id, band_id, summary, job_spec_url) VALUES (?,?,?,?,?) "
const editRoleQuery = "UPDATE role SET name=?, department_id=?, band_id=?, summary=?, job_spec_url=?) WHERE role_id=?"
const createRoleCapabilityLinkQuery = "INSERT INTO role_capability(role_id,capability_id) VALUES (?,?) "

class RolesHandler {
    constructor( config ) { }

    createRole(params, db){
        return new Promise( ( resolve, reject ) => {
            console.log(createRoleQuery)
            console.log([params.roleName,params.departmentId,params.bandId,params.summary,params.jobSpecUrl])
            console.log(db.query(createRoleQuery,[params.roleName,params.departmentId,params.bandId,params.summary,params.jobSpecUrl]))
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


editRole(params, db){
    return new Promise( ( resolve, reject ) => {
        console.log(editRoleQuery)
        console.log([params.roleName,params.departmentId,params.bandId,params.summary,params.jobSpecUrl])
        console.log(db.query(editRoleQuery,[params.roleName,params.departmentId,params.bandId,params.summary,params.jobSpecUrl]))
        try {
            db.query(editRoleQuery,[params.roleName,params.departmentId,params.bandId,params.summary,params.jobSpecUrl, params.roleId]).then(rows => {
                console.log(rows.insertId)
                    resolve({"success":"Successfully edited role"})
                
            })
        } catch (err){
            reject({"error":"Error editing role"})
        }
    })
}
}

module.exports = RolesHandler;