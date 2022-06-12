import express from 'express'
import cors from 'cors'
import dbAutenticathe from './utils/dbAuthentication.js'
//import {ExcelToJson} from './utils/ReadExcel'

const app = express()

app.set('PORT', process.env.PORT || 9000)

app.use(cors())
app.use(express.json())

//app.use(express.static(path.join(__dirname,'app/upload')))

app.get('/', (req,res)=> {
   res.send("hola desde el get de app.js");
})

import blogs from './routes/blogRoute.js'
import uploadImages from './routes/uploadImages.route.js'

app.use('/task', blogs)
app.use('/images', uploadImages)

dbAutenticathe()

import XLSX from 'xlsx'

const ExcelToJson = ()=> {
    const excel = XLSX.readFile('D:\\Documentos\\Desktop\\app_fullstack_mongo_express_node_axios\\backendNode\\src\\DataBase_datos_exported.xls');

    var SheetName = excel.SheetNames; //^ devuelve un array con el nombre de hoja
    let Data = XLSX.utils.sheet_to_json(excel.Sheets[SheetName[0]]); //& array
    /* 
      si se exporta en el arcivo formatos hora, estos se importaran como formato texto 

    */

      console.log(SheetName);
      console.log(Data);

      const filteredData = Data.map((data) => 
          data.Title
      )
      console.log(filteredData);

   }

   ExcelToJson()
   

   
app.listen(app.get('PORT'), ()=> {
 console.log("CONECTADO A http://localhost:", app.get('PORT'));
});

export default app;
