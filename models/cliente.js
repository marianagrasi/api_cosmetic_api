//MIgracion
const {Schema, model}=require('mongoose')

const ClienteSchema= Schema({
   
    nit_cedula:{
        type:Number,
        required:[true, 'El campo nit o cédula es requerido'],
        unique:[true,  'El nit o cédula:{VALUE} ya existe']
    },

    nombre:{
        type: String,
        required:[true, 'El campo nombre es requerido'],
        unique:[true, 'El nombre:{VALUE} ya existe']
    },

    apellido:{
        type: String,
        required:[true, 'El campo apellido es requerido'],
        unique:[true, 'El apellido:{VALUE} ya existe']
    },

    correo:{
        type:String,
        required: [true, 'El campo correo es requerido'],
        unique: [true, 'El apellido:{VALUE} ya existe']
    },

    direccion:{
        type:String,
        required:[true, 'El campo dirección es requerido'],
        unique: [true, 'La dirección:{VALUE} ya existe'],
    },

    telefono:{
        type: Number,
        required:[true, 'El campo telefóno es requerido'],
        unique: [true, 'El telefóno:{VALUE} ya existe']
    },

    estado:{
        type: Boolean,
        required: [true, 'El estado es obligatorio'],
        default:false,
    }
})
//nombre del objeto Cliente
//Exportar el modelo 
module.exports = model('Cliente', ClienteSchema)
