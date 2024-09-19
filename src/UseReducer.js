import React, { useReducer } from "react";

const initialState={ count : 0 }

function  reducer(state,action){

    switch(action.type){

case "increase"  :  return { count : state.count + 1}
case "decrease"  : return { count :  state.count  - 1}
case "reset"   :  return {  count : state.count = 0}
default : return {count : state.count}

    }

}

export default function UseReduccer(){

    const[state,dispatch]=useReducer(reducer,initialState);

    return(

        <div>
<button  onClick={()=> dispatch({type:"increase"})}>increase</button>
<button  onClick={()=> dispatch({type:"decrease"})}>decrease</button>
<button  onClick={()=> dispatch({type:"reset"})}>reset</button>
<h1>{state.count}</h1>
        </div>

    );
}