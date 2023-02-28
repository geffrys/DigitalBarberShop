const { connect } = require('../Models/dbConnection')
const util = require('util')

const query = util.promisify(connect.query).bind(connect)


async function getBarberos(req,res){
    let result
    try {
        result = await query(`SELECT * FROM barberos`)
    } catch (error) {
        result = error
    }
    res.json(result)
}




module.exports = { getBarberos }