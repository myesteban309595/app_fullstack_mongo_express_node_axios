import XLSX from 'xlsx'

const ruta = 'D:\Documentos\Desktop\app_fullstack_mongo_express_node_axios\backendNode\src\DataBase_datos_exported.xls'

const ExcelToJson = ()=> {
    const excel = XLSX.readFile('D:\Documentos\Desktop\app_fullstack_mongo_express_node_axios\backendNode\src\DataBase_datos_exported.xls');

    var SheetName = excel.SheetNames; //^ devuelve un array con el nombre de hoja
    let Data = XLSX.utils.sheet_to_json(excel.Sheets[SheetName[0]]); 
    /* 
      si se exporta en el arcivo formatos hora, estos se importaran como formato texto 

    */

      console.log(SheetName);

}

export default ExcelToJson