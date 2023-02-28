class Servicio {
    constructor(id, fecha, horaservicio, metodopago, barbero, sede, descripcion, tiposervicio, idusuario) {
        this.id = id
        this.idusuario = idusuario
        this.fechaservicio = fecha
        this.horaservicio = horaservicio
        this.metodopago = metodopago
        this.barbero = barbero
        this.sede = sede
        this.descripcion = descripcion
        this.tiposervicio = tiposervicio
    }
}


module.exports = Servicio