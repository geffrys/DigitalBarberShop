const { registrarUsuario, getUsuarios,  updateUser, getUsuarioEnsayo, getUsuarioById } = require('../Data/Usuarios');

const router = require('express').Router()


router.route('/ensayo').post(getUsuarioEnsayo)

router.route('/').post(registrarUsuario)

router.route('/').get(getUsuarios)

router.route('/actualizar').post(updateUser)

module.exports = router