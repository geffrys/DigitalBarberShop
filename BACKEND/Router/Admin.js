const router = require('express').Router()
const { getBarberias } = require('../Data/barberias');
const { getBarberos } = require('../Data/barberos');
const { getMetodopago, setMetodoPago } = require('../Data/metodopago');
const { setProducto, getProductos } = require('../Data/productos');
const { getTipoPelo, setTipoPelo} = require('../Data/tipoPelo');
const { setTipousuario, getTipousuario} = require('../Data/tipousuario');


router.route('/tipopelo/').post(setTipoPelo)

router.route('/tipopelo/').get(getTipoPelo)

router.route('/tipousuario').get(getTipousuario)

router.route('/tipousuario').post(setTipousuario)

router.route('/barberos').get(getBarberos)

router.route('/sedes').get(getBarberias)

router.route('/metodopago').get(getMetodopago)

router.route('/metodopago').post(setMetodoPago)

router.route('/productos').post(setProducto)

router.route('/productos').get(getProductos)

module.exports = router