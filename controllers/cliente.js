//Importar paquetes requeridos de node
const {response}= require('express')
//Importacion de los modelos
const Cliente= require('../models/cliente')
//insercion- modificación de datos
//consultar

const clienteGet = async(req, res = response)=>{
    //desestructuración-- obtiene l que se manda del navegador
    const {nit_cedula}= req.query
    //consultar todos los usuarios
    const clientes = await Cliente.find()
    res.json({
        clientes
    })
}

const clientePost= async(req, res = response)=>{
    //capturar atributos o parametros
    const body= req.body
    let mensaje= ''
    console.log(body)

    try{
        const cliente = new Cliente(body) // instanciar el objeto
        //guardar el objeto 
        await cliente.save()
        mensaje= 'La inserción se realizo exitosamente'
    }
    catch(error){
        if (error) {
            if (error.name === 'ValidationError') {
                console.error(Object.values(error.errors).map(val => val.message))
                mensaje = Object.values(error.errors).map(val => val.message)
            }
        }
        console.log(mensaje)

    }

    res.json({
        msg: mensaje
    })


}

const clientePut= async(req, res= response)=>{
    //captura atributos o parametros
    const{nit_cedula,nombre,apellido,correo, direccion, telefono, estado}=req.body
    let mensaje=''
    //realizar la moficiacion
   // el campo 1 es con el cual se va hacer la busqueda los demas son los campos que se va a modificar ejem nombre:nombre
    
    try{
        const cliente= await Cliente.findOneAndUpdate({nit_cedula:nit_cedula}, {nombre:nombre,apellido:apellido, correo:correo, direccion:direccion, telefono:telefono, estado:estado})
        mensaje='La modificacion se efectuo correctamente'

    }
    catch(error){
        mensaje='Se presentaron problemas en la modificacion'

    }

   

    res.json({
        msg: mensaje 
    })

}

const clienteDelete= async(req, res= response)=>{
    //captura atributos o parametros
    const{_id}=req.body
    let mensaje=''
    //realizar la moficiacion
   // el campo 1 es con el cual se va hacer la busqueda los demas son los campos que se va a modificar ejem nombre:nombre
    
    try{
        const cliente= await Cliente.deleteOne({_id : _id})
        mensaje='La eliminacion se efectuo correctamente.'

    }
    catch(error){
        mensaje='Se presentaron problemas en  la eliminacion.'

    }

   

    res.json({
        msg: mensaje 
    })

}


module.exports={
    clienteGet,
    clientePost,
    clientePut,
    clienteDelete
}
