const createRoleQuery = "INSERT INTO role(name, department_id, band_id, summary, job_spec_url) VALUES (?,?,?,?,?) "
const editRoleTableQuery = "UPDATE role SET name=?, summary=?, job_spec_url=?, band_id=? WHERE role_id=?"
const editRoleCapabilityTableQuery = "UPDATE role_capability SET capability_id=? WHERE role_id=?"
const createRoleCapabilityLinkQuery = "INSERT INTO role_capability(role_id,capability_id) VALUES (?,?) "
const deleterole = "DELETE FROM role where role_id= ?"

const rolesInDepartmentQuery =  "SELECT role_id, name, department_id, band_id FROM role WHERE department_id = ?"
const fullRolesInDepartmentQuery = "SELECT * FROM viewTableData WHERE department_id = ?"
const roleViewDataQuery = "SELECT role_id,name,summary,job_spec_url,school_id FROM viewRoleData WHERE role_id = ?"
const viewEditRole = "SELECT role_id, capability_id, band_id, RoleName, summary, job_spec_url, CapabilityName, BandName FROM viewEditRole WHERE role_id = ?"
const RoleBandCapabilityExists = "SELECT EXISTS(SELECT * FROM viewEditRole WHERE capability_id=? AND band_id=?) AS result"

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
                    db.query(editRoleCapabilityTableQuery, [params.capabilityId, params.roleId]).then(success => {
                        resolve({"success":"Successfully edited role"})
                    }, fail => {
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

    getRolesInDept(params, db){
        return new Promise( ( resolve, reject ) => {
            try {
                db.query(rolesInDepartmentQuery,[params.departmentID]).then(rows => {
                    resolve(rows)
                })
            } catch (err){
                reject({"error":"Error getting roles in department"})
            }
        })
    }

    getFullRole(params, db){
        return new Promise( ( resolve, reject ) => {
            try {
                db.query(fullRolesInDepartmentQuery,[params.departmentID]).then(rows => {
                    resolve(rows)
                })
            } catch (err){
                reject({"error":"Error getting full roles in department"})
            }
        })
    }

    getRoleViewData(params, db){
        return new Promise( ( resolve, reject ) => {
            try {
                db.query(roleViewDataQuery,[params.roleID]).then(rows => {
                    resolve(rows)
                })
            } catch (err){
                reject({"error":"Error getting roles view in department"})
            }
        })
    }

    viewEditRole(params, db){
        return new Promise( ( resolve, reject ) => {
            try {
                db.query(viewEditRole,[params.roleID]).then(rows => {
                    resolve(rows)
                })
            } catch (err){
                reject({"error":"Error getting role information"})
            }
        })
    }

    roleBandCapabilityExists(params, db){
        return new Promise( ( resolve, reject ) => {
            try {
                db.query(RoleBandCapabilityExists,[params.capabilityId, params.bandId]).then(rows => {
                    resolve(rows)
                })
            } catch (err){
                reject({"error":"Error getting role information"})
            }
        })
    }
}
module.exports = RolesHandler
