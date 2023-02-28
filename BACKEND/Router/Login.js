const router = require('express').Router()
const { getUsuarioByEmailPassword, getUsuarioById } = require('../Data/Usuarios');


router.route('/').post(getUsuarioByEmailPassword)

router.route('/id').post(getUsuarioById)



module.exports = router