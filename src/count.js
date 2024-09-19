import React, { useContext } from "react";
import Context from "./CreateContext";




export default function Count(){

const dest=useContext(Context);

    return(

        <div>
<h1>count statement</h1>

<h1>age:{dest} </h1>
<h1>salary:{dest} </h1>

        </div>
    );
}