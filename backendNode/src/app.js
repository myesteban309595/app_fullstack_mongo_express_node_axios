import express from 'express'
import cors from 'cors'
import XLSX from 'xlsx'

import dbAutenticathe from './utils/dbAuthentication.js'
import ExcelToJson from './utils/ReadExcel.js'

const app = express()

app.set('PORT', process.env.PORT || 9000)

app.use(cors())
app.use(express.json())

//app.use(express.static(path.join(__dirname,'app/upload')))

app.get('/', (req,res)=> {
   res.send("hola desde el get de app.js");
})

import blogs from './routes/blogRoute.js'
//import uploadDocumentFile from './routes/load.route.js'

app.use('/task', blogs)
//app.use('/',uploadDocumentFile)

//^  ======   PROBANDO EL IMPORTE DE MULTER  ===============
import multer from 'multer'
const route = express.Router()

export const storage = multer.diskStorage({
  destination: (req, file,callback) => {
      callback(null, path.join(__dirname,'../uploads/')) //^ <-------  aqui pasamos la ruta de carga
     },
     filename: (req,file, callback)=>{
         callback(null,file.originalname)  //^ <-------  aqui obtenems nombre  de los archivos
     }
 })
 
export const Upload = multer({storage}) 

route.post('/subir', Upload.single('archivo'), (req,res) => {
  console.log("req.file =>",req.file);
  console.log("archivo subido correctamente");
})

//^^ ==========================================================

   dbAutenticathe()
   ExcelToJson()
   
app.listen(app.get('PORT'), ()=> {
 console.log("CONECTADO A http://localhost:", app.get('PORT'));
});

export default app;
