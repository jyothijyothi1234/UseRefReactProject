import React, { useReducer } from "react";


const  initialState={  count  :  0}


function  Aserts(state,action){

switch(action.type){

    case  "increase": return{ count  : state.count+1 }
    case  "decrease": return{ count  : state.count-1 }
    case  "reset": return{ count  : state.count=0 }
    default:return{  count  : state.count}

}
}

export default function ActionR(){

const[state,dispatch]=useReducer(Aserts, initialState);
    return(

        <div>
<button  onClick={()=>dispatch({type:"increase"})}>increase</button>
<button    onClick={()=>dispatch({type:"decrease"})}>decrease</button>
<button    onClick={()=>dispatch({type:"reset"})}>reset</button>
<h1> {state.count} </h1>

        </div>
    );
}