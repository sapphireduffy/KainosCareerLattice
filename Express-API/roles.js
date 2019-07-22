const createRoleQuery = "INSERT INTO role(name, department_id, band_id, summary, job_spec_url) VALUES (?,?,?,?,?)"
const getCreatedRoleIDQuery = "SELECT role_id FROM role ORDER BY role_id DESC LIMIT 1"
const createRoleCapabilityLinkQuery = "INSERT INTO role_capability(role_id,capbility_id) VALUES (?,?)"

class RolesHandler {
    constructor( config ) { }

    createRole(params, db){
        try{
            db.query(createRoleQuery,[params.Name,params.DepartmentId,params.BandId,params.Summary,params.JobSpecUrl]).then(rows => {
                db.query(getCreatedRoleIDQuery).then(role => {
                    db.query(createRoleCapabilityLinkQuery,[role.role_id,params.CapabilityId]).then(result => {
                        console.log("SUCESSFULLY ADDED ROLE")
                        return {"Message":"Successfully added role"}
                    })
                })
            })
        } catch(err){
            return {"Message":"Error adding role: "+err}
        }
    }
}
module.exports = RolesHandler;