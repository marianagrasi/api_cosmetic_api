//Migracion 
const {Schema, model}=require('mongoose')

const UsuarioSchema= Schema({
    //se define tipos de datos
    nombre:{
        unique:[true, 'El nombre:{VALUE} ya existe'],
        type: String,
        required: [true,'El campo nombre usuario es requerido']

    },
    
    correo:{
        unique:[true, 'El correo:{VALUE} ya existe'],
        type: String,
        required: [true,'El campo correo es requerido']

    },

    password:{
        type: String,
        required:[true, 'El password es requerido'],
        minlength: [4, 'Debe tener minimo 4 caracteres'],
        maxlength: [12, 'Debe tener maximo 12 caracteres'],

        
    },

    rol:{
        type:String,
        required:true,
        enum:['Administrador', 'Vendedor']

    },

    estado:{
        type: Boolean,
        required:[true, 'El estado es obligatorio'],
        default:false,
    }
})
//este es el nombre del objeto Usuario
module.exports = model('Usuario', UsuarioSchema)//Exportar el modelo

