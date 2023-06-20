//Migracion 
const {Schema, model}=require('mongoose')

const DevolucionSchema= Schema({
    //se define tipos de datos
    id_detalle_venta:{
        unique:[true, 'El id detalle de venta:{VALUE} ya existe'],
        type: Number,
        required: [true,'El campo id detalle de venta es requerido']

    },
    id_producto:{
        unique:[true, 'El id producto:{VALUE} ya existe'],
        type: Number,
        required: [true,'El campo id producto es requerido']

    },

    cantidad_devuelta:{
        type: Number,
        required: [true,'El campo cantidad devuelta es requerido']

    },

    motivo_devolucion:{
        type: String,
        required: [true,'El campo motivo devolucion es requerido']

    },

 
    devolver_inventario:{
        type: Boolean,
        required:[true, 'El campo devolver al inventario es obligatorio'],
        default:false,
    }
})
//este es el nombre del objeto Usuario
module.exports = model('Devolucion', DevolucionSchema)//Exportar el modelo

