const { connect } = require('../Models/dbConnection')
const util = require('util')

const query = util.promisify(connect.query).bind(connect)


async function setServicios(req,res){
    let fechaservicio = req.body.fecha
    let horaservicio = req.body.horaservicio
    let metodopago = req.body.metodopago
    let barbero = req.body.barbero
    let sede = req.body.sede
    let descripcion = req.body.descripcion
    let tiposervicio = req.body.tiposervicio
    let idusuario = req.body.idusuario
    let result
    let customquery
    if(barbero != 0){
        customquery = `INSERT INTO servicios( idusuario, idtiposervicio, idbarbero, idsede, idtipopago, fechaservicio, horaservicio, descripcion) VALUES ('${idusuario}','${tiposervicio}','${barbero}','${sede}','${metodopago}','${fechaservicio}','${horaservicio}','${descripcion}')`
    }else{
        customquery = `INSERT INTO servicios( idusuario, idtiposervicio,  idsede, idtipopago, fechaservicio, horaservicio, descripcion) VALUES ('${idusuario}','${tiposervicio}','${sede}','${metodopago}','${fechaservicio}','${horaservicio}','${descripcion}')`
    }
    try {
        result = await query(customquery)
    } catch (error) {
        result = error
    }
    res.json(result)
}

async function getServicios(req,res){
    let id = req.body.id
    let result 
    try {
        result = await query(`SELECT idusuario, tiposervicios.descripcion as tipo_servicio, idbarbero, sedes.nombresede as nombre_sede, tipopago.descripcion as metodo_pago, fechaservicio, horaservicio FROM servicios INNER JOIN sedes ON servicios.idsede = sedes.idsede INNER JOIN tipopago ON servicios.idtipopago = tipopago.idtipopago INNER JOIN tiposervicios ON servicios.idtiposervicio = tiposervicios.idtiposervicio WHERE idusuario = ${id}`)
    } catch (error) {
        result = error
    }
    res.json(result)
}

// let servicios = []
// const getServicios = (id) => {
//     connect.query(, (err, res, fields) => {
        
//             res.forEach(element => {
//                 servicios.push({
//                     'fecha': element.fechaservicio,
//                     'hora': element.horaservicio,
//                     'lugar': element.nombre_sede,
//                     'servicio': element.tipo_servicio,
//                     'metodo_pago': element.metodo_pago
//                 })
//             });
        
//     })
//     return servicios
// }

// let serviciosSpa = []
// const getServicioSpa = (id) => {
//     connect.query(`SELECT idusuario, tiposervicios.descripcion as tipo_servicio, idbarbero, sedes.nombresede as nombre_sede, tipopago.descripcion as metodo_pago, fechaservicio, horaservicio FROM servicios INNER JOIN sedes ON servicios.idsede = sedes.idsede INNER JOIN tipopago ON servicios.idtipopago = tipopago.idtipopago INNER JOIN tiposervicios ON servicios.idtiposervicio = tiposervicios.idtiposervicio WHERE idusuario = ${id} AND tiposervicios.idtiposervicio = 1;`)
// }


module.exports = { setServicios, getServicios }