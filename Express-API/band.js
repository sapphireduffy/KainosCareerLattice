const getBandQuery = "SELECT * FROM viewBandData WHERE band_id = ?"
const allBandsQuery = "SELECT * FROM band order by school_id ASC"
const addBandDescriptionQuery = "INSERT INTO band_description(commercial_awareness,communicating_and_teamwork,"+
    "innovation_and_continuous_improvement,customer_focus,developing_yourself_and_others,planning_and_organising,"+
    "job_specific_knowledge) VALUES (?,?,?,?,?,?,?)"
const addBandQuery = "INSERT INTO band(name,school_id,description_id,training,responsibilities)"+
    " VALUES(?,?,?,?,?)"

class BandHandler {
    constructor( config ) { }

    addBand(params, db){
        return new Promise( ( resolve, reject ) => {
            try {
                db.query(addBandDescriptionQuery,[params.commercialAwareness,params.communicatingAndTeamwork,
                params.innovationAndContinuousImprovement,params.customerFocus,
                params.developingYourselfAndOthers,params.planningAndOrganisation,
                params.jobSpecificKnowledge]).then(rows => {
                    db.query(addBandQuery,[params.name, params.schoolId, rows.insertId,
                    params.training, params.responsibilities]).then(result => {
                        resolve({"success":"Successfully added band"})
                    })
                })
            } catch (err){
                reject({"error":"Error adding band"})
            }
        })
    }

    getBands(params, db){
        return new Promise( ( resolve, reject ) => {
            try {
                db.query(getBandQuery,[params.bandId]).then(rows => {
                    resolve(rows)
                })
            } catch (err){
                reject({"error":"Error getting bands"})
            }
        })
    }

    allBands(db){
        return new Promise( ( resolve, reject ) => {
            try {
                db.query(allBandsQuery).then(rows => {
                    resolve(rows)
                })
            } catch (err){
                reject({"error":"Error getting bands"})
            }
        })
    }
}
module.exports = BandHandler