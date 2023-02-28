const mysql = require('mysql')

/**
 * Metodo para realizar la conexion a partir de la autenticacion en la base de datos y el link
 */

const connect = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'digitabarbershoptesting',
    host: 'localhost',
    port: '3306'
})

/**
 * Metodo para testear conexion, de resto no tendra mayor importancia
 */

const testConnection = () => {
    connect.connect((err) => {
        if (err) {
            console.log('hubo un error conectandose a la base de datos');
        }
        else {
            console.log('conexion correcta a la base de datos');
        }
    })
}


module.exports = { connect, testConnection }