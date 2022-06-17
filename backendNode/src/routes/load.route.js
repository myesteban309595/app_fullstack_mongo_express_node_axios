import express from 'express'
import {Upload} from '../controllers/loads.controller'

console.log(Upload);

const route = express.Router()

    route.post('/subida', Upload.single('archivo'), (req,res) => {
        console.log("req.file =>",req.file);
        console.log("archivo subido correctamente");
    })

export default route