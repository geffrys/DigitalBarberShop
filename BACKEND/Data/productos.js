const { connect } = require('../Models/dbConnection')
const util = require('util')

const query = util.promisify(connect.query).bind(connect)


async function setProducto(req,res){
    let result
    let imagen = req.body.imagen
    let nombreproducto =req.body.nombreproducto
    let descripcionproducto = req.body.descripcionproducto
    let customquery
    if(descripcionproducto != ''){
        customquery = `INSERT INTO productos( nombreproducto, descripcionproducto, imagen) VALUES ('${nombreproducto}','${descripcionproducto}','${imagen}')`
    }else{
        customquery = `INSERT INTO productos( nombreproducto, imagen) VALUES ('${nombreproducto}','${imagen}')`
    }
    try {
        result = await query(customquery)
    } catch (error) {
        result = error
    }
    res.json(result)
}

async function getProductos(req,res){
    let result
    try{
        result = await query(`SELECT * FROM productos`)
    }catch(err){
        result =err
    }
    res.json(result)
}

module.exports = { setProducto, getProductos}