class Usuario {
    constructor(id, name, email, phone, password, tipopelo, tipousuario){
        if(id!=null){
            this.id = id
        }else{
            this.id = null
        }
        this.name = name
        this.email = email
        this.phone = phone
        this.password = password
        this.tipopelo = tipopelo
        this.tipousuario = tipousuario
    }
}


module.exports = Usuario