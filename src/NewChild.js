import React, { useContext } from "react";
import UserContext from "./UserContext";



export default function NewChild(){

const deter=useContext(UserContext);
    return(

        <div>
<h1>datanew:{deter}</h1>
        </div>
    );
}