import express from 'express'
import cors from 'cors'
import path from 'path'

import dbAutenticathe from './utils/dbAuthentication.js'
import ExcelToJson from './utils/ReadExcel.js'

//& __filename, __dirname is not defined in ES module scope, We exported this from path and fileURLToPath module
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//&==============================================================================================================

const app = express()

app.set('PORT', process.env.PORT || 9000)

app.use(cors())
app.use(express.json())

//app.use(express.static(path.join(__dirname,'app/upload')))
app.use('/public', express.static(`${__dirname}/uploads/imagesFiles`)) // aqui pasamos la verdadera ubicacion

app.get('/', (req,res)=> {
   res.send("hola desde el get de app.js");
})

import blogs from './routes/blogRoute.js'
import importExcel from './routes/importExcel.js'

app.use('/task', blogs)
app.use('/', importExcel)

// ExcelToJson()
dbAutenticathe()

app.listen(app.get('PORT'), ()=> {
   console.log("CONECTADO A http://localhost:", app.get('PORT'));
});


export default app;
