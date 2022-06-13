import XLSX from 'xlsx'
import path from 'path'

//& __filename, __dirname is not defined in ES module scope, We exported this from path and fileURLToPath module
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//&==============================================================================================================

//* codigo que me leera el excel y lo convertira a JSON

export default function ExcelToJson(){
  
  let pathRoute = path.join(__dirname,`../uploads/datos.xlsx`)
  
  const excel = XLSX.readFile( 
      pathRoute
      //'D:\Documentos\Desktop\app_fullstack_mongo_express_node_axios\backendNode\src\datos.xlsx'
    );
    let arrayExcel = []
    var SheetName = excel.SheetNames; //^ devuelve un array con el nombre de hoja
      for(let i=0; i<SheetName.length ; i++)
      {
       const Data = XLSX.utils.sheet_to_json(excel.Sheets[SheetName[i]]); //& array
       arrayExcel.push(Data)
       console.log(Data);
      }     
   }
