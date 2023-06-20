//Conectarme a mongoose
const mongoose= require('mongoose')

//crear la conexion 
const dbConnetion=()=>{
    try{
        mongoose.connect(process.env.MONGO_CNN)
        console.log('Conexión exitosa a la base de datos')
    }
    catch(error){
        console.log('Error en BD')
        throw new error('Error conectando a la base de datos') 
    }
}
//Exportar la cadena de conexión
module.exports= dbConnetion