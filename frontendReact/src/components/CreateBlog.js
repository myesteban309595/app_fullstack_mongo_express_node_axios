import axios from 'axios'
import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    ThemeProvider,
    Box,
    Grid,
    Tooltip,
    TableCell,
    TableRow,
    createMuiTheme,
    Typography,
    FormControl,
    Button,
    InputLabel,
    TextField,
    FormHelperText,
    Input,
    FormGroup, 
    makeStyles,
    IconButton,
    FormControlLabel,
    Switch
                  } from "@material-ui/core";
  import { createTheme,withStyles } from "@material-ui/core/styles";
  import sweet from 'sweetalert'

const URI = 'http://localhost:9000/task/'

const useStyles = makeStyles({
    one: {
        '&:hover': {
            backgroundColor : "green"
        }
    },
    two: {
        '&:hover': {
          color: "blue"
        }
    }
})
    const UseStylesTable = withStyles((_) => ({
        root: {
          "&:hover": {
            backgroundColor: "#d9d3d2",
            cursor: "pointer",
          },
        },
      }))(TableRow);

const CompCreateBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()   
    

    const classes = useStyles();
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        if(title==='' || content ==='')
        {
          console.log("ingrese campos validos");
          sweet({
            icon: "info",
            title: "Ingrese Campos Validos",
            text:
              "No se puede crear",
            buttons: false,
            timer: 2000,
          });
        }else {
          const blogcreado =await axios.post(URI, {tittle: title, content:content})
          navigate('/')
          console.log("creado con exito:", blogcreado, title, content);
        }
    }   
    return (
    <Fragment>  
      <Grid container justifyContent="center">
             <Grid container item direction="column" justifyContent="center" alignItems="center" >
                 <Typography
                  color = "secondary"
                  style={{ fontWeight: "bold" , marginBottom:20, fontSize: '1.990rem'}}
                  className={classes.two}
                 >
                  Create POST
                </Typography>
                <toolTip title="este es un toolTip para el campo titulo" arrow>
                 <Grid style={{width:210, marginBottom:10 }} className={classes.one}> 
                  {/*<label className='form-label' color='blue'><strong>Titulo</strong></label>*/}
                      <TextField
                       label="TITULO" 
                       variant="outlined" 
                       onChange={ (e)=> setTitle(e.target.value)}                         
                       placeholder="Ingresar Un Título"
                       size="small"
                       >
                     </TextField>
                 </Grid>
                </toolTip>
                <toolTip title="este es un toolTip para el campo contenido" arrow>
                 <Grid  style={{width:200 }}> 
                     {/*<label className='form-label'><strong>Contenido</strong></label>*/}
                    <UseStylesTable>      
                      <TextField 
                        variant="outlined"
                        label="Contenido"
                        multiline
                        rows={2}
                        value={content}
                        onChange={ (e)=> setContent(e.target.value)} 
                        type="text"
                        />             
                    </UseStylesTable>          
                 </Grid>
                    </toolTip>
                  <Grid container style={{width:320, marginTop:10, marginLeft:100}} direction="row"> 
                   <Grid>
                    <toolTip title="Visita GitHub" arrow>
                      <Button href="https://github.com/myesteban309595/app_fullstack_mongo_express_node_axios" 
                         variant="outlined"
                         ><i class="fa-brands fa-github"></i>
                      </Button>
                    </toolTip> 
                   </Grid>  
                   <Grid style={{marginLeft:15}}>              
                    <toolTip title="Almacenar en la DB" arrow>
                      <Button type='submit' variant="outlined" 
                         onClick={store}><i class="fa-regular fa-floppy-disk"></i>
                      </Button> 
                    </toolTip>   
                   </Grid>
                   <Grid style={{marginLeft:15}}>              
                    <toolTip title="Ver Lista" arrow>
                      <Button
                         variant="outlined" href='/'><i class="fa-solid fa-list"></i>
                      </Button> 
                    </toolTip>  
                   </Grid>
                  </Grid>        
             </Grid>  
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Tooltip title=" esto es un FormGroup y dos FormControlLabel con OnChange" arrow> 
           <FormGroup aria-label="position">
            <FormControlLabel
              value="actual"
              label="Form control Label"
              control={<Switch color="secondary" />}
              onChange={(event) => {
              }}
              style={{ color: "black" }}
              />
            <FormControlLabel
              value="todas"
              label="Form control Label"
              control={<Switch color="primary" />}
              style={{ color: "blue" }}
              />
           </FormGroup>
          </Tooltip>
        </Grid>
    </Fragment>
    )
}

export default CompCreateBlog