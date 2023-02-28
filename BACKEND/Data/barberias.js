const { connect } = require('../Models/dbConnection')
const util = require('util')

const query = util.promisify(connect.query).bind(connect)


async function getBarberias(req,res){
    let result
    try {
        result = await query(`SELECT * FROM sedes`)
    } catch (error) {
        result = error
    }
    res.json(result)
}

module.exports = { getBarberias }