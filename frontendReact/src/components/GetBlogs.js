import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Table, TableBody, TableContainer, TableHead, TableRow , TableCell, TableFooter, Typography, Tooltip, Button, ButtonGroup} from '@material-ui/core'

const URI = 'http://localhost:9000/task/'

const CompGetBlogs = ()=> {

  const [blogs, setBlog] = useState([])
  useEffect( ()=>{
      getBlogs()
  },[])

  //procedimineto para mostrar todos los blogs
  const getBlogs = async () => {
      const res = await axios.get(URI)
      setBlog(res.data)
  }
    
  console.log("mapeo blogs", blogs.map(p=>p));
  //procedimineto para eliminar un blog
  const deleteBlog = async (id) => {
    console.log("id que recibo en delete:", id);
     await axios.delete(`${URI}${id}`)
     getBlogs()
  }
  return(
      <div className='container'>
          <div className='row'>
              <div className='col'>
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
                </ButtonGroup>
                  <TableContainer>
                  <Table className='table'>
                      <TableHead className='table-primary'>
                          <TableRow>
                              <TableCell>Title</TableCell>
                              <TableCell>Content</TableCell>
                              <TableCell >Actions</TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          { blogs.map ( (blog) => (
                              <TableRow key={blog.id} >
                                <Tooltip title={blog.tittle} arrow>
                                  <TableCell align="left"> { blog.tittle } </TableCell>
                                </Tooltip>
                                  <TableCell align="left"> { blog.content } </TableCell>
                                  <TableCell align="left">
                                     <Tooltip title="Update" arrow>
                                      <Link to={`/edit/${blog._id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                     </Tooltip>
                                     <Tooltip title="Delete" arrow>
                                      <Button onClick={ ()=>deleteBlog(blog._id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></Button>
                                     </Tooltip>
                                  </TableCell>
                              </TableRow>
                          )) }
                      </TableBody>
                      <TableFooter style={{background:"#95CCDA", textAlign:"center", width:200}}>
                        <TableRow>
                            <Typography component="p" variant="h5" align="center" style={{fontSize: '0.990rem'}}
                            >HOLA MUNDO ESTE ES UN TABLE FOOTER
                            </Typography>
                        </TableRow>
                      </TableFooter>
                  </Table>
                  </TableContainer>
              </div>    
          </div>
      </div>
  )
//^ el elemento thead contiene un bloque de filas
//^ <tr> define una fila de celdas en una tabla. Estas pueden ser una mezcla de elementos <td> y <th> 
//^ El elemento HTML <th> define una celda como encabezado de un grupo de celdas en una tabla. La naturaleza exacta de este grupo está definida por los atributos scope y headers .
//^ El elemento HTML tbody define un sección de cuerpo en una tabla (elemento HTML table).
//^ El elemento HTML Celda de tabla ( <td> ) define la celda de una tabla que contiene datos. Esta participa en el modelo de tablas.

}

export default CompGetBlogs