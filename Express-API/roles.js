const createRoleQuery = "INSERT INTO role(name, department_id, band_id, summary, job_spec_url) VALUES (?,?,?,?,?) "
const editRoleTableQuery = "UPDATE role SET name=?, summary=?, job_spec_url=?, band_id=? WHERE role_id=?"
const editRoleCapabilityTableQuery = "UPDATE role_capability SET capability_id=? WHERE role_id=?"
const createRoleCapabilityLinkQuery = "INSERT INTO role_capability(role_id,capability_id) VALUES (?,?) "
const deleterole = "DELETE FROM role where role_id= ?"


class RolesHandler {
    constructor(config) { }

    createRole(params, db){
        return new Promise( ( resolve, reject ) => {
            try {
                db.query(createRoleQuery,[params.roleName,params.departmentId,params.bandId,params.summary,params.jobSpecUrl]).then(rows => {
                    db.query(createRoleCapabilityLinkQuery,[rows.insertId,params.capabilityId]).then(result => {
                        console.log("SUCESSFULLY ADDED ROLE")
                        resolve({ "success": "Successfully added role" })
                    })
                })
            } catch (err) {
                reject({ "error": "Error adding role" })
            }
        })
    }


editRole(params, db){
    return new Promise( ( resolve, reject ) => {
        try {
            db.query(editRoleTableQuery,[params.roleName,params.summary,params.jobSpecUrl, params.bandId, params.roleId]).then(rows => {
                db.query(editRoleCapabilityTableQuery, [params.capabilityId, params.roleId]).then(result => {
                    resolve({"success":"Successfully edited role"})
                    reject({"error":"Error editing role inner"})
                })
            })
        } catch (err){  
            reject({"error":"Error editing role"})
        }
    })
}

    deleteRole(params, db) {
        return new Promise((resolve, reject) => {
                console.log("roleid" + [params.roleId])
            try {
                db.query(deleterole, [params.roleId]).then(rows => {
                    console.log(rows)
                    resolve({ "success": "Successfully deleting role" })
                })
            } catch (err) {
                reject({ "error": "Error deleting role" })
            }
        })
    }

}
module.exports = RolesHandler
