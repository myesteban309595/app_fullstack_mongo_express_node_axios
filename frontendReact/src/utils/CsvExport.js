import { Button } from "@material-ui/core";
import { CSVLink, CSVDownload  } from "react-csv";
import React, { Fragment, useState } from 'react'
import axios from 'axios'

import API from '../constantes/constantes'
const URI = API.URI;

const ExportCsvData = ()=> {
    
    const [blogs, setBlog] = useState([])
    
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    const DbData = blogs.map((element) => {
        return element
    })
    
    return(
        <Fragment> 
           <CSVLink  
           data={DbData} 
           filename={"Data_DB_CSV_EXPORTED"}
           >
            <Button style={{
                             background:"#6ab04c", 
                             color:"white", 
                             marginTop:5, 
                             marginBottom:0,
                             width:80
                             }}>
              <strong>CSV</strong>
            </Button>
           </CSVLink>
        </Fragment>
    )
}

export default ExportCsvData