import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import UserContext from "./UserContext";
import NewChild from "./NewChild";

const ParentComponent = () => {
    const arst = "jyothi";
const sert="hey hai";
const[dataSer,setDataSer]=useState(0)
    return (
        <div>
            <p>Parent Component</p>
            <UserContext.Provider value={arst}>
                <ChildComponent />
            </UserContext.Provider>


            <UserContext.Provider value={sert}>
                <NewChild />
            </UserContext.Provider>


            <UserContext.Provider value={[dataSer,setDataSer]}>
                <ChildComponent   dataSer={dataSer}   setDataSer={setDataSer} />
            </UserContext.Provider>
        </div>
    );
}

export default ParentComponent;
