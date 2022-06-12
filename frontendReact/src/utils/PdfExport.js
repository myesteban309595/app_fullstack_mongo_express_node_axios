import { Button } from "@material-ui/core";
import { CSVLink, CSVDownload  } from "react-csv";
import React, { Fragment, useState } from 'react'
import axios from 'axios'

import API from '../constantes/constantes'
const URI = API.URI;

const ExportPdfData = ()=> {
    
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
            <Button style={{
                             background:"linear-gradient(to right, #f00000, #dc281e)", 
                             color:"white", 
                             marginTop:5, 
                             marginBottom:0,
                             width:80
                             }}>
              <strong>PDF</strong>
            </Button>
        </Fragment>
    )
}

export default ExportPdfData