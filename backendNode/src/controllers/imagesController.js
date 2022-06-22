
import imageModel from '../models/image.model.js'

export default function addImages (nombreArchivo){
    console.log("nombreArchivo recibido en images controllers:===>", nombreArchivo);

    const imagesDB = imageModel(  // instancia de mi modelo para poder acceder al metodo serImgUrl
        {
            urlFile
        }) 

    if(nombreArchivo)
    {
        const filename = nombreArchivo // recibo parametro desde multer
        imagesDB.setImgUrl(filename); //* envia parametro y recibe en el modelo para postear la url
    }

    const storagedImage = imagesDB.save() 
    try{
        console.log("iamgen guardada en mongo:::", storagedImage);
        // res.status(200).send({storagedImege}) 
    }catch(e) {
        console.log(e);
        // res.status(500).send({message: e.message}) 
    }
}