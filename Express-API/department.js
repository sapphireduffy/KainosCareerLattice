const getDepartmentsQuery = "SELECT name FROM department WHERE department_id = ?"

class DepartmentHandler {
    constructor( config ) { }

    getDepartments(params, db){
        return new Promise( ( resolve, reject ) => {
            try {
                db.query(getDepartmentsQuery,[params.departmentID]).then(rows => {
                    resolve(rows)
                })
            } catch (err){
                reject({"error":"Error getting departments"})
            }
        })
    }
}
module.exports = DepartmentHandler