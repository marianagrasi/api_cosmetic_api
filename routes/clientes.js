
const {Router} = require('express')

const route = Router()
//se define despues de crear el controllador
//importar metodos del controlador
const{clienteGet, clientePost, clientePut, clienteDelete}=require('../controllers/cliente')
route.get('/', clienteGet)
route.post('/',clientePost )
route.put('/',clientePut )
route.delete('/',clienteDelete )



module.exports = route


