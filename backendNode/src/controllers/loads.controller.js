'use strict'

import multer from 'multer'
import path from 'path'

//& __filename, __dirname is not defined in ES module scope, We exported this from path and fileURLToPath module
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//&==============================================================================================================


export const storage = multer.diskStorage({
        destination: (req, file,callback) => {
            callback(null, path.join(__dirname,'../uploads/')) //^ <-------  aqui pasamos la ruta de carga
           },
           filename: (req,file, callback)=>{
               callback(null,file.originalname)  //^ <-------  aqui obtenems nombre  de los archivos
           }
       })
       
 export const Upload = multer({storage})  // esto seria como un middleware



