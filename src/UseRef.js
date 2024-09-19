import React, { useEffect, useRef, useState,  } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




export default function Rated () {
   

    /*  here that is checking that the value is change are not it change it wont render that value */
// const data=useRef(null);

// const a=()=>{

//     data.current++;

//     console.log("count value:"+data.current)

// }



const values=useRef("");


useEffect(()=>{
values.current.focus();


},[])



    return(

 <Grid container item xs={12}>


  <Grid item xs={8}>
        {/* <Button variant="contained"   onClick={a} >Submit</Button> */}
        </Grid> 

 <input      placeholder="enter the value"  ref={values} />

        </Grid>
    )

     }



// function MyComponent() {
//   const inputRef = useRef(null);
//   console.log(inputRef.current);

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button>Focus Input</button>
//     </div>
//   );
// }

// export default MyComponent;

