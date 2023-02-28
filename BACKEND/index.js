const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


/**
 * Seteamos los endPoints
 */
const registro = require('./Router/Registro')
const Admin = require('./Router/Admin')
const login = require('./Router/Login')
const services = require('./Router/Services')
app.use('/registro/', registro)
app.use('/admin', Admin)
app.use('/login/', login)
app.use('/service/', services)



app.get('/',(req,res)=>{
    res.send("hello world")
})




app.listen(5000, () => {
    "El servidor se ha iniciado en el puerto 5000"
})