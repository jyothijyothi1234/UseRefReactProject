import React, { useRef, useState } from "react";
import { Button, Grid } from "@mui/material";



export default function StopWatch(){

const[value,setValue]=useState(0);
const data=useRef();


const Handler=()=>{

    data.current=setInterval(()=>{

        setValue(value=>value+1)
    },1000)

}


const stopHandler=()=>{

    clearInterval(data.current)
}


    return(


        <Grid  container item xs={12}>
<Button   onClick={Handler}>start</Button>

<h1>{value}</h1>
<Button   onClick={stopHandler}>stop</Button>


        </Grid>
    );
}