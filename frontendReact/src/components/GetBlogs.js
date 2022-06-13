import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Table,
     TableBody, 
     TableContainer, 
     TableHead, 
     TableRow , 
     TableCell, 
     TableFooter, 
     Typography, 
     Tooltip, 
     Button, 
     ButtonGroup, 
     makeStyles,
     Select,
     Grid,
     TablePagination
      } from '@material-ui/core'

  import API from '../constantes/constantes'
  import ExportCsvData from '../utils/CsvExport'
  import ExportPdfData from '../utils/PdfExport'
//   import ExportExcelData from '../utils/ExcelExport'
  import ReactHTMLTableToExcel from 'react-html-table-to-excel';
  
const URI = API.URI;

const styleshover = makeStyles({
  danger: {
      "&:hover":{
          backgroundColor:"#F9CACA",
          cursor: "pointer"
      }
  },
  select: {
    "&:hover":{
        backgroundColor:"#F0F0F0",
        cursor: "pointer"
    }
  },
    fileInput:{
      "&:hover":{
          background:"linear-gradient(to right, #acb6e5, #86fde8)",
          cursor: "pointer"
      },
  }

})
const CompGetBlogs = ()=> {
    
    const [blogs, setBlog] = useState([])

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [files, setFile] = useState(null)

    const handleFile=(e)=> {
      // Getting the files from the input
      let files = e.target.files;
      this.setFile({ files });
      console.log("recibiendo archivo:", files);
    }

  useEffect( ()=>{
      getBlogs()
  },[])

  //procedimineto para mostrar todos los blogs
  const getBlogs = async () => {
      const res = await axios.get(URI)
      setBlog(res.data)
  }
    

  //procedimineto para eliminar un blog
  const deleteBlog = async (id) => {
    console.log("id que recibo en delete:", id);
     await axios.delete(`${URI}${id}`)
     getBlogs()
  }

  const classes = styleshover();


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleUpload =(e)=> {

    console.log("dando click al boton");

    let formData = new FormData();
  
    //Adding files to the formdata
    formData.append("image", files);
    formData.append("name", "Name");
  
    axios({
      // Endpoint to send files
      url: "http://localhost:9000/subir",
      method: "POST",
      // headers: {
        // Add any auth token here
      //   authorization: "your token comes here",
      // },
      // Attaching the form data
      data: formData,
    })
      .then((res) => { }) // Handle the response from backend here
      .catch((err) => { }); // Catch errors if any
  }

return(
    <Grid container justifyContent='center'>
          <TableRow>
                <ButtonGroup 
                   variant="contained" 
                   aria-label="outlined primary button group" 
                   size="small"
                   style={{marginBottom:5, marginTop:10}}
                   >
                  <Tooltip title={"ADD"}>
                  <Button href="/create" variant="contained" style={{background:"#95CCDA"}}>
                      <i className="fa-solid fa-file-circle-plus"></i>
                  </Button>
                  </Tooltip>
                  <Tooltip title={"See a MUI table example"}>
                  <Button href="/table" variant = "outlined">
                      <i className="fa-solid fa-table"></i>
                  </Button>
                  </Tooltip>
                  <Tooltip title={"See a MUI DataGrid table example"}>
                  <Button href='/tablePagination' variant = "outlined"> 
                      <i className="fa-solid fa-list-check"></i>
                  </Button>
                  </Tooltip>
                  <Tooltip title={"Filter tablaDB"}>
                  <Button href='/tablePaginationDB' variant = "outlined">
                     <i class="fa-solid fa-filter"></i>
                  </Button>
                  </Tooltip>

                  <Grid container>
                     <form action="/subir" method='post' onSubmit>
                       <Grid container>
                         <input type="file" 
                                name='archivo' 
                                multiple
                                style={{width:350,height:30, marginLeft:400}}
                                onChange={handleFile}
                                className={classes.fileInput} 
                                >
                          </input>
                         <Button type='submit' 
                                 variant="outlined"
                                 onClick={handleUpload}
                                 style={{width:5,height:30}}
                                 className={classes.danger} 
                                 >POST
                          </Button>
                       </Grid>
                     </form>
                  </Grid>
                </ButtonGroup>
                  <TableContainer>
                  <Table className='table'  id="table-row-to-excel-export" style={{minWidth:950}}>
                      <TableHead className='table-primary'>
                          <TableRow>
                              <TableCell>Title</TableCell>
                              <TableCell>Content</TableCell>
                              <TableCell>Actions
                              <Tooltip title={"Export Data"} placement='left' arrow>
                                <Select style={{marginLeft:15, backgroundColor:"#58B19F", height:20, width:25}}>
                                 <Grid container item direction="column" style={{width:79}}>
                                   <ReactHTMLTableToExcel
                                      table ="table-row-to-excel-export"
                                      filename="DataBase_datos_exported"
                                      sheet="Data from DB"
                                      id = "export-to-excel-buttom"
                                      className="btn btn-success"
                                      buttonText={<strong>XMLS</strong>}
                                    />
                                      <ExportCsvData/>
                                      <ExportPdfData/>
                                 </Grid>
                                </Select>
                               </Tooltip>
                              </TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          { blogs
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map ( (blog) => (
                              <TableRow key={blog.id} className={classes.select}>
                                <Tooltip title={blog.tittle} arrow>
                                  <TableCell   align="left"> { blog.tittle } </TableCell>
                                </Tooltip>
                                  <TableCell align="left"> { blog.content } </TableCell>
                                  <TableCell align="left">
                                     <Tooltip title="Update" placement='left' arrow>
                                      <Link to={`/edit/${blog._id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                     </Tooltip>
                                     <Tooltip title="Delete" placement='right' arrow > 
                                      <Button className={classes.danger}  
                                              onClick={()=>deleteBlog(blog._id)}
                                              style={{width:10 , height: 40, marginLeft:2, color:"#F35858"}}
                                              ><i className="fas fa-trash-alt"></i></Button>
                                     </Tooltip>
                                  </TableCell>
                              </TableRow>
                          )) }
                      </TableBody>
                      {/* <TableFooter style={{background:"#95CCDA", textAlign:"center", width:800}}>
                            <Typography  variant="h5" align="center" style={{fontSize: '0.990rem'}}
                            >HOLA MUNDO ESTE ES UN TABLE FOOTER
                            </Typography>
                      </TableFooter> */}
                  </Table>
                  </TableContainer>
                  <TablePagination
                      rowsPerPageOptions={[5, 10, 25, 50, 100]}
                      component="div"
                      count={blogs.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                   />
          </TableRow>
          <importExcelFile/>
      </Grid>
  )
//^ el elemento thead contiene un bloque de filas
//^ <tr> define una fila de celdas en una tabla. Estas pueden ser una mezcla de elementos <td> y <th> 
//^ El elemento HTML <th> define una celda como encabezado de un grupo de celdas en una tabla. La naturaleza exacta de este grupo está definida por los atributos scope y headers .
//^ El elemento HTML tbody define un sección de cuerpo en una tabla (elemento HTML table).
//^ El elemento HTML Celda de tabla ( <td> ) define la celda de una tabla que contiene datos. Esta participa en el modelo de tablas.

}

export default CompGetBlogs