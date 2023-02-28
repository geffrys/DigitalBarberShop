const { connect } = require('../Models/dbConnection')
const util = require('util')

const query = util.promisify(connect.query).bind(connect)



async function getTipoPelo(req,res){
    let result
    try {
        result = await query(`SELECT * FROM tipopelos`)
    } catch (error) {
        result = error
    }
    res.json(result)
}


async function setTipoPelo(req,res){
    let result
    let descripcion = req.body.tipoPelo
    try {
        result = await query(`INSERT INTO tipopelos(descripcion) VALUES ('${descripcion}')`)
    } catch (error) {
        result = error
    }
    res.json(result)
}



module.exports = {getTipoPelo, setTipoPelo}