const getBandQuery = "SELECT * FROM viewBandData WHERE band_id = ? order by school_id ASC, priority_in_school ASC"
const allBandsQuery = "SELECT * FROM band order by school_id ASC, priority_in_school ASC"
const addBandDescriptionQuery = "INSERT INTO band_description(commercial_awareness,communicating_and_teamwork,"+
    "innovation_and_continuous_improvement,customer_focus,developing_yourself_and_others,planning_and_organising,"+
    "job_specific_knowledge) VALUES (?,?,?,?,?,?,?)"
const addBandQuery = "INSERT INTO band(name,school_id,description_id,training,responsibilities,priority_in_school)"+
    " VALUES(?,?,?,?,?,?)"
const prepareBandTableQueryBelow = "update band set priority_in_school = priority_in_school + 1 where priority_in_school > ? AND school_id = ?;"
const prepareBandTableQueryAbove = "update band set priority_in_school = priority_in_school + 1 where priority_in_school >= ? AND school_id = ?;"

class BandHandler {
    constructor( config ) { }

    addBand(params, db) {
        return new Promise((resolve, reject) => {
        try {
            // Insert description data into 'band_description' table
            db.query(addBandDescriptionQuery,[params.commercialAwareness,params.communicatingAndTeamwork,
            params.innovationAndContinuousImprovement,params.customerFocus,
            params.developingYourselfAndOthers,params.planningAndOrganisation,
            params.jobSpecificKnowledge]).then(rows => {
                // Inserting a band to the top of a school
                if(params.aboveValue != null) {
                    console.log(params.aboveValue)
                    // Prepare table for insertion and then insert the data
                    db.query(prepareBandTableQueryAbove, [params.aboveValue, params.schoolId])
                    db.query(addBandQuery, [params.name, params.schoolId, rows.insertId,
                    params.training, params.responsibilities, params.aboveValue]).then(result => {
                        resolve({"success":"Successfully added band"})
                    })
                }
                // Inserting a band below another band
                else {
                    // Prepare table for insertion and then insert the data
                    db.query(prepareBandTableQueryBelow, [params.belowValue, params.schoolId])
                    db.query(addBandQuery, [params.name, params.schoolId, rows.insertId,
                    params.training, params.responsibilities, params.belowValue+1]).then(result => {
                        resolve({"success":"Successfully added band"})
                    })
                }
            })
        } catch(err) {
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