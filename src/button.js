import React, { useContext } from "react";
import Context from "./CreateContext";


const desters=useContext(Context)

export default function Button(){


    return(


        <div>
            <h1>button statement</h1>

            <button   onClick={desters}>count</button>

            <button   onClick={desters}>salry</button>

        </div>
    );
}