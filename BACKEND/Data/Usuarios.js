const { connect } = require('../Models/dbConnection')
const util = require('util')

const query = util.promisify(connect.query).bind(connect)



const Usuario = require('../Models/Usuario')


async function getUsuarioEnsayo(req, res){
    let password = req.body.password
    let email = req.body.email
    const result = await query(`SELECT * FROM usuarios WHERE mailusuario="${email}" AND contrasenausuario="${password}"`)
    res.json(result)
}

async function registrarUsuario(req, res){
    let nombre = req.body.name
    let email = req.body.email
    let phone = req.body.phone
    let password = req.body.password
    let tipopelo = req.body.tipopelo
    let tipousuario = req.body.tipousuario
    let result
    try {
         result = await query(`INSERT INTO usuarios( nombreusuario, mailusuario, telefonousuario, contrasenausuario, idtipopelo, idtipousuario) VALUES ('${nombre}','${email}',${phone},'${password}',${tipopelo},${tipousuario})`)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
    res.json(result)   
}

async function updateUser(req, res){
    let nombre = req.body.name
    let email = req.body.email
    let phone = req.body.phone
    let password = req.body.password
    let tipopelo = req.body.tipopelo
    let tipousuario = req.body.tipousuario
    let idusuario = req.body.id

    let result
    try {
        result = await query(`UPDATE usuarios SET nombreusuario='${nombre}',mailusuario='${email}',telefonousuario='${phone}',contrasenausuario='${password}',idtipopelo='${tipopelo}',idtipousuario='${tipousuario}' WHERE idusuario = ${idusuario}`)
    } catch (error) {
        console.log(error);
    }
    res.json(result)
}



async function getUsuarios(req,res){
    let result
    try {
        result = await query(`SELECT * FROM usuarios`)
    } catch (error) {
        console.log(error);
    }
    res.json(result)
}

async function getUsuarioByEmailPassword(req, res){
    let email = req.body.email
    let password = req.body.password
    let result
    try {
        result = await query(`SELECT * FROM usuarios WHERE mailusuario="${email}" AND contrasenausuario="${password}"`)
    } catch (error) {
        console.log(error);
    }
    res.json(result)
}

async function getUsuarioById(req,res){
    let id = req.body.id
    let result
    try {
        result = await query(`SELECT * FROM usuarios WHERE idusuario=${id}`)
    } catch (error) {
        console.log(error);
    }
    res.json(result)
}




module.exports = { registrarUsuario, getUsuarios, updateUser, getUsuarioByEmailPassword, getUsuarioById, getUsuarioEnsayo}




