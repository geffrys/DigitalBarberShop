const { connect } = require('../Models/dbConnection')
const util = require('util')

const query = util.promisify(connect.query).bind(connect)



async function setTipousuario(req,res){
    let result
    let tipousuario = req.body.tipousuario
    try {
        result = await query(`INSERT INTO tipousuarios(descripcion) VALUES ('${tipousuario}')`)
    } catch (error) {
        result = error
    }
    res.json(result)
}

async function getTipousuario(req,res){
    let result
    try {
        result = await query(`SELECT * FROM tipousuarios`)
    } catch (error) {
        result = error
    }
    res.json(result)
}

module.exports = {setTipousuario, getTipousuario}