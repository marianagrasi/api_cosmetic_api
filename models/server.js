const express = require ('express')
const dbConnection= require('../database/config.js')
 //para seguridad
const cors = require('cors')
// recibir datos de un formulario html
const bodyParser= require('body-parser')

class Server{
    constructor(){
        this.app = express()
        //capturando variables
        this.port = process.env.PORT
        //ruta publica cliente
        this.clientePath = '/api/cliente'
        //ruta publica usuario
        this.usuarioPath = '/api/usuario'
        //ruta publica devolucion
        this.devolucionPath = '/api/devolucion'
        this.middlewares()//ayudas extras enlaces o puentes
        //las rutas
        this.routes()
        //conectarse a la base de datos
        this.conectarDB()
    
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando puerto ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(express.static(__dirname + "/public"));
        this.app.use(cors());
        this.app.use(bodyParser.json())
    }

    routes(){
        this.app.use(this.clientePath, require('../routes/clientes'))
        this.app.use(this.usuarioPath, require('../routes/usuarios'))
        this.app.use(this.devolucionPath, require('../routes/devoluciones'))
    }
    //asincronica porque no se sabe cuanto tiempo hay que esperar siempre hya que retornar con await

    async conectarDB(){
        //esperando la conexion o respuesta del servidor
        await dbConnection()
    }
}
module.exports = Server 