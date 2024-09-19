import React, { useEffect, useRef, useState } from "react";

export default function Random(){

    const[count,setCount]=useState(0);
    const data=useRef(0);

    useEffect(()=>{
data.current=count
    },[count])
    return(
        <div>
            <button  onClick={()=>setCount(count+1)}>onClick</button>
            {count}
           previous count: {data.current}
        </div>
    );
}

