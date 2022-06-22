import express from 'express'
import multer from 'multer'
import path from 'path'
import mimeType from 'mime-types'
import fs from 'fs'

import ExcelToJson from '../utils/ReadExcel.js'
import addImages from '../controllers/imagesController.js'

const route = express.Router()

//& __filename, __dirname is not defined in ES module scope, We exported this from path and fileURLToPath module
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//&==============================================================================================================


var Directory

const diskStorage = multer.diskStorage({
    destination: (req, file,callback) => {
        console.log("mostrando file recibido en disk:=>", file);
        var extensionArchivo = path.extname(file.originalname).substring(1);
        console.log("extension archivo en diskstorahe:::", extensionArchivo);

        if(extensionArchivo === 'xls'){  Directory= 'excelFiles'}
        if(extensionArchivo === 'jpg' || 'tif' || 'tiff' || 'JPEG' || 'jpeg' || 'png') {Directory= 'imagesFiles'}
        if(extensionArchivo === 'pdf' ) {Directory= 'pdfFiles'}
        if(extensionArchivo === 'docx' ) {Directory= 'wordDocumentFiles'}

        callback(null, path.join(__dirname,`../uploads/${Directory}`)) //^ <-------  aqui pasamos la ruta de carga
    },
    filename: (req,file, callback)=>{
        //const extension = mimeTypes.extension(file.mimetype) 
        callback(null,file.originalname)  //^ <-------  aqui obtenems nombre  de los archivos
    }
})

const UploadFile = multer({   //instance of multer
    storage: diskStorage
}).single("file") 

route.post('/subir', UploadFile, (req,res,next) => {
    
var nombreArchivo = req.file.originalname
var extensionArchivo = path.extname(nombreArchivo).substring(1);
console.log("nombreArchivo=>",nombreArchivo);
console.log("extensionArchivo=>",extensionArchivo);
console.log("req.file =>",req.file);

extensionArchivo == 'xls'? ExcelToJson(nombreArchivo) : ExcelToJson('excel-prueba.xls')
extensionArchivo == 'jpeg' || 'JPEG' || 'img' || 'png' ? addImages(nombreArchivo) : ""
//res.send("archivos subidos correctamente:")
})
export default route