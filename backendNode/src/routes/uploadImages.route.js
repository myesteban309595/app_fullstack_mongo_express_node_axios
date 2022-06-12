import express from 'express' 
import almacenamiento from '../utils/loads.js'
import {GetImage, UploadImage} from '../controllers/uploadImages.controllers.js'

import multer from "multer"

const uploader = multer({almacenamiento})

const route = express.Router()

// route.get('/', GetAllImages)
// route.post('/', UpdateImage)
// route.put('/', postImage)
// route.delete('/', DeleteImage)

route.post('/upload',  uploader.single('file'), UploadImage)
route.get('/downloadImage', GetImage)

export default route