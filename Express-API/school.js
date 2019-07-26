const getSchools = "SELECT * FROM school"

class SchoolHandler {
    constructor(config) { }


    getSchools(params, db) {
        return new Promise((resolve, reject) => {
            try {
                db.query(getSchools).then(rows => {
                    resolve(rows)
                })
            } catch (err) {
                reject({ "error": "Error getting schools" })
            }
        })
    }
}
module.exports = SchoolHandler;