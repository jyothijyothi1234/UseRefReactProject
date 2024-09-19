import { Button } from "@mui/material";
import React, { useCallback, useState } from "react";
import Count from "./count";
import Context from "./CreateContext";



export default function   MyParent(){


const[age,setAge]=useState(18);
const[salary,setSalary]=useState(10000);


const updateage=useCallback(()=>{


    setAge(age+1)
},[age])

const updatesalary=useCallback(()=>{
    setSalary(salary+1)

},[salary])


    return(

        <div>


            <Context.Provider  value={age}>

            <Button    onClick={updateage} >updateage</Button>
            
            <Count   age={age} text="age" />

            </Context.Provider>

            <Context.Provider   value={salary}>


            <Button    onClick={updatesalary} >updateage</Button>
         
         <Count  salary={salary} text="salary" />
            </Context.Provider>
           
        </div>
    );
}