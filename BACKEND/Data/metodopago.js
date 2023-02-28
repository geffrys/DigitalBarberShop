const { connect } = require('../Models/dbConnection')
const util = require('util')

const query = util.promisify(connect.query).bind(connect)

async function getMetodopago(req,res){
    let result
    try {
        result = await query(`SELECT * FROM tipopago`)
    } catch (error) {
        result = error
    }
    res.json(result)
}

async function setMetodoPago(req,res){
    let result
    let descripcion = req.body.descripcion
    try {
        result = await query(`INSERT INTO tipopago(descripcion) VALUES('${descripcion}')`)
    } catch (error) {
        result = error
    }
    res.json(result)
}

module.exports = {getMetodopago, setMetodoPago}