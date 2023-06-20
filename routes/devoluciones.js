

const {Router} = require('express')

const route = Router()
//se define despues de crear el controllador
//importar metodos del controlador
const{devolucionGet, devolucionPost, devolucionPut, devolucionDelete}=require('../controllers/devolucion')
route.get('/', devolucionGet)
route.post('/', devolucionPost )
route.put('/', devolucionPut )
route.delete('/', devolucionDelete )



module.exports = route


