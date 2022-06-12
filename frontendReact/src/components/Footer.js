import { TableCell, TableContainer, TableRow, Typography, Table, Button, Grid, makeStyles, Tooltip, Container } from '@material-ui/core';
import React, { Fragment } from 'react';


const styleButton = {
    height:30,
    width:20,
    background:"white",
    marginBottom:6 
}

const stylehover = makeStyles(
    {
    select: {
        "&:hover":{
            background:"linear-gradient(to right, #141e34, #536976 );"
        }
    }
})

export default function Footer() {

    const classes = stylehover()
    return(
        <Fragment>
            <Grid Container  style={{marginTop:40,height:135,maxWidth:1380, background: "linear-gradient(to right, #141e30, #243b55)"}}>
                <Grid >
                    <TableRow className={classes.select}>
                        <Grid container item
                              direction="row" 
                              style={{color:"white", minWidth:1349}}
                              justifyContent="center"
                              >
                          <TableCell align='center' >
                           <Grid container direction="column" align="center" style={{width:410}} alignItems="center" >
                              <Typography style={{marginBottom:12}}>Repositories</Typography>
                             <Tooltip title="Github" placement="right" arrow>
                               <Button variant="contained" style={styleButton} ><i className="fa-brands fa-github"></i></Button>
                             </Tooltip>
                             <Tooltip title="Gitlab" placement="right" arrow>
                               <Button variant="contained" style={styleButton}><i class="fa-brands fa-gitlab"></i></Button>
                             </Tooltip>
                           </Grid>
                          </TableCell>
                          <TableCell align='center'>
                           <Grid container item direction="column" align="center" style={{width:410}} alignItems="center">
                              <Typography  style={{marginBottom:12}}>Documentation</Typography>
                            <Tooltip title="Material-UI" placement="right" arrow>
                              <Button variant="outlined" href="https://mui.com/material-ui/getting-started/installation/" 
                              style={styleButton}
                              >MUI</Button>
                            </Tooltip>
                            <Tooltip title="npmjs" placement="right" arrow>
                              <Button variant="outlined" style={styleButton}><i class="fa-brands fa-npm"></i></Button>
                            </Tooltip>
                           </Grid>
                         </TableCell>
                         <TableCell align='center' >
                          <Grid container item direction="column" align="center" style={{width:410}} alignItems="center">
                             <Typography style={{marginBottom:12}}>Problems ?</Typography>
                           <Tooltip title="Stackoverflow" placement="right" arrow>
                             <Button variant="contained" style={styleButton}><i class="fa-brands fa-stack-overflow"></i></Button>
                           </Tooltip>
                           <Tooltip title="W3School" placement="right" arrow>
                             <Button variant="contained" style={styleButton}><i className="fa-brands fa-github"></i></Button>
                           </Tooltip>
                          </Grid>
                         </TableCell>
                        </Grid>
                    </TableRow>
                </Grid>
            </Grid>
        </Fragment>
    )
}