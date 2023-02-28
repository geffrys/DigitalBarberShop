const { setServicios, getServicios } = require('../Data/servicios')
const Servicio = require('../Models/Servicio')

const router = require('express').Router()

router.route('/').post(setServicios)

router.route('/service').post(getServicios)






module.exports = router