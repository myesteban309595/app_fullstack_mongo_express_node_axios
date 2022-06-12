//'use strict'

import multer from 'multer'
import path from 'path'

 const almacenamiento = multer.diskStorage({
    destination: function(req, file,callback) {
        callback(null, path.join(__dirname,'../uploads/')) //^ <-------  aqui pasamos la ruta de carga
    },
    filename: function(req,file, callback){
        callback(null,`${file.filename}-${Date.now()}-${file.mimetype.split('/')[1]}`)  //^ <-------  aqui pasamos nombre personalizado de la imagen
        //~ [1] es el segundo parametro... osea, la extension
    }

})

export default almacenamiento