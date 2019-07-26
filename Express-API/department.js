const getDepartmentsQuery = "SELECT name FROM department WHERE department_id = ?"
const allDepartmentsQuery = "SELECT * FROM department"

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

    getAllDepartments(db){
        return new Promise( ( resolve, reject ) => {
            try {
                db.query(allDepartmentsQuery).then(rows => {
                    resolve(rows)
                })
            } catch (err){
                reject({"error":"Error getting departments"})
            }
        })
    }
}
module.exports = DepartmentHandler