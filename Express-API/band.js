const getBandQuery = "SELECT * FROM viewBandData WHERE band_id = ?"
const allBandsQuery = "SELECT * FROM band order by school_id ASC, priority ASC"
const addBandDescriptionQuery = "INSERT INTO band_description(commercial_awareness,communicating_and_teamwork,"+
    "innovation_and_continuous_improvement,customer_focus,developing_yourself_and_others,planning_and_organising,"+
    "job_specific_knowledge) VALUES (?,?,?,?,?,?,?)"
const addBandQuery = "INSERT INTO band(name,school_id,description_id,training,responsibilities,priority)"+
    " VALUES(?,?,?,?,?,?)"

const prepareBandTableQueryAbove = "UPDATE band SET priority = CASE when priority is null then coalesce(priority,?)  else priority + 1 end WHERE school_id = ?;"
const prepareBandTableQueryBelow = "UPDATE band SET priority = CASE when priority is null then coalesce(priority,?) + 1 when priority = ? then priority else priority + 1 end WHERE school_id = ?;"

class BandHandler {
    constructor( config ) { }

    /*addBand(params, db){
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
    }*/

     addBand(params, db) {
        console.log(params.belowValue)
         return new Promise((resolve, reject) => {
            try {
                db.query(addBandDescriptionQuery,[params.commercialAwareness,params.communicatingAndTeamwork,
                params.innovationAndContinuousImprovement,params.customerFocus,
                params.developingYourselfAndOthers,params.planningAndOrganisation,
                params.jobSpecificKnowledge]).then(rows => {
                        
                    // Insert
                     db.query(addBandQuery, [params.name, params.schoolId, rows.insertId,
                        params.training, params.responsibilities, params.priority]).then(result => {
                        resolve({"success":"Successfully added band"})
                        console.log(result)
                        if (params.aboveValue != null) {
                            db.query(prepareBandTableQueryAbove, [params.aboveValue,params.schoolId]).then(eww =>{
                                console.log(eww)
                            })
                        }else{
                        db.query(prepareBandTableQueryBelow, [params.belowValue,params.belowValue,params.schoolId]).then(eww =>{
                            console.log(eww)
                        })
                    }
                    })

                    console.log("2")
                   // db.query(prepareBandTableQueryBelow, [params.belowValue,params.schoolId]);
                    // Insert new band above top band of job school
                    // console.log(params.aboveValue)
                    // if (params.aboveValue != null) {
                    //     // Prepare table
                    //     db.query(prepareBandTableQueryAbove, [params.belowValue, params.schoolId]);
                    // }
                    // // Insert new band below band in job school
                    // else {
                    //     console.log("here", params.belowValue)
                    //     db.query(prepareBandTableQueryBelow, [params.belowValue,params.schoolId]);
                    // }
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