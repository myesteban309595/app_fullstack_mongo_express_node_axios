
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import moment from 'moment';

const URI = 'http://172.26.53.8:4001/api/v1/SyncAssets/LastSync'

const UseStyle = makeStyles()

export default function LastSync() {

    const [lastsync, setLastsync] = useState(null)

    const GetLastSync = async () => {
        const response = await axios.get(URI)
        if(response.status === 200)
        {
            if(response?.data?.result?.createdAt !== '')
            {
                setLastsync(response.data.result.createdAt);
            } 
        }

    }

    useEffect(()=>{
       GetLastSync()
    },[])

    const classes = UseStyle();

    return(
        <header className={classes.header} style={{textAlign:"center", color:"blue" }}>
            <div>
                <Typography>
                    {
                        lastsync ? `Fecha de sincronizacion: ${moment(lastsync).format("DD/MM/YYYY")} a las ${moment(lastsync).formatformat("hh:mm:ss A")} ` 
                        : 
                        `No hay sincronizaciones a SAP disponibles`
                    }
                </Typography>
            </div>
        </header>
    )

}