const getBandQuery = "SELECT * FROM viewBandData WHERE band_id = ?"
const allBandsQuery = "SELECT * FROM band"

class bandHandler {
    constructor( config ) { }

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