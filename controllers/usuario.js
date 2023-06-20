//Importar paquetes requeridos de node
const {response}= require('express')
//Importacion de los modelos 
const Usuario=require('../models/usuario')
//Importar bcrypt
const bcrypt= require('bcrypt')

//insercion, modificacion de datos

//consultar
const usuarioGet = async(req, res = response)=>{
    const{nombre}= req.query // desestructuracion obtiene lo que se manda del navegador
    

    //Buscar todos los usuarios colsultar los uasuarios
    const usuarios = await Usuario.find()
    res.json({
        usuarios
    })
}


const usuarioPost= async(req, res= response)=>{
    //captura atributos o parametros
    const body=req.body
    let mensaje=''
    console.log(body)
   
   // const{nombre,password,rol,estado}=req.query
   // try si esta bien ejecuta lo de adentro el cath si esta malo muestra error
   try{
    const usuario= new Usuario(body) //instaciar el objeto

    //guardar objeto
    await usuario.save()
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

const usuarioPut = async (req, res = response) => {
    const { nombre, correo, password, rol, estado } = req.body;
    let mensaje = '';
  
    try {
      //const hashedPassword = await bcrypt.hash(password, 10);
  
      const usuario = await Usuario.findOneAndUpdate(
        { nombre: nombre },
        { password: password,correo:correo, rol: rol, estado: estado }
      );
  
      if (!usuario) {
        mensaje = 'El usuario no existe';
        return res.status(404).json({ mensaje });
      }
  
      mensaje = 'La modificación se efectuó correctamente';
      return res.status(200).json({ mensaje });
    } catch (error) {
      mensaje = 'Se presentaron problemas en la modificación';
      return res.status(500).json({ mensaje });
    }
};


const usuarioDelete= async(req, res= response)=>{
    //captura atributos o parametros
    const{_id}=req.body
    let mensaje=''
    //realizar la moficiacion
   // el campo 1 es con el cual se va hacer la busqueda los demas son los campos que se va a modificar ejem nombre:nombre
    
    try{
        const usuario= await Usuario.deleteOne({_id : _id})
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
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}
