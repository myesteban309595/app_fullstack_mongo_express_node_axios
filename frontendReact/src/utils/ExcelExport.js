import React, { Fragment, useState } from 'react'
import axios from 'axios'
import ReactExport from "react-data-export";

import API from '../constantes/constantes'

const URI = API.URI;

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportExcelData = ()=> {
    
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
                <ExcelFile>
                <ExcelSheet data={DbData} name="Employees">
                    <ExcelColumn label="Name" value="name"/>
                    <ExcelColumn label="Wallet Money" value="amount"/>
                    <ExcelColumn label="Gender" value="sex"/>
                    <ExcelColumn label="Marital Status"
                                 value={(col) => col.is_married ? "Married" : "Single"}/>
                </ExcelSheet>
                <ExcelSheet data={DbData} name="Leaves">
                    <ExcelColumn label="Name" value="name"/>
                    <ExcelColumn label="Total Leaves" value="total"/>
                    <ExcelColumn label="Remaining Leaves" value="remaining"/>
                </ExcelSheet>
                </ExcelFile>
        </Fragment>
    )
}


export default ExportExcelData
