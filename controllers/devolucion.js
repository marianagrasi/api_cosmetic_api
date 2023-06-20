//Importar paquetes requeridos de node
const {response}= require('express')


//Importacion de los modelos 
const Devolucion=require('../models/devolucion')

//insercion, modificacion de datos

//consultar
const devolucionGet = async(req, res = response)=>{
    const{id_detalle_venta}= req.query // desestructuracion obtiene lo que se manda del navegador
    

    //Buscar todos los usuarios colsultar los uasuarios
    const devoluciones = await Devolucion.find()
    res.json({
        devoluciones
    })
}


const devolucionPost= async(req, res= response)=>{
    //captura atributos o parametros
    const body=req.body
    let mensaje=''
    console.log(body)
   
   // const{nombre,password,rol,estado}=req.query
   // try si esta bien ejecuta lo de adentro el cath si esta malo muestra error
   try{
    const devolucion= new Devolucion(body) //instaciar el objeto

    //guardar objeto
    await devolucion.save()
    mensaje='La insercion se realizo exitosamente'

   } catch(error){
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

const devolucionPut= async(req, res= response)=>{
    //captura atributos o parametros
    const{id_detalle_venta,id_producto, cantidad_devuelta, motivo_devolucion, devolver_inventario}=req.body
    let mensaje=''
    //realizar la moficiacion
   // el campo 1 es con el cual se va hacer la busqueda los demas son los campos que se va a modificar ejem nombre:nombre
    
    try{
        const devolucion= await Devolucion.findOneAndUpdate({id_detalle_venta:id_detalle_venta}, {id_producto:id_producto, cantidad_devuelta:cantidad_devuelta, motivo_devolucion: motivo_devolucion, devolver_inventario:devolver_inventario})
        mensaje='La modificacion se efectuo correctamente'

    }
    catch(error){
        mensaje='Se presentaron problemas en la modificacion'

    }

   

    res.json({
        msg: mensaje 
    })

}

const devolucionDelete= async(req, res= response)=>{
    
    const{_id}=req.body
    let mensaje=''

    
    try{
        const devolucion= await Devolucion.deleteOne({_id : _id})
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
    devolucionGet,
    devolucionPost,
    devolucionPut,
    devolucionDelete
}
