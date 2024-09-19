import React, { useContext, useState } from "react";
import UserContext from "./UserContext";
import { Button } from "@mui/material";

const ChildComponent = () => {
    const data = useContext(UserContext);
    const [dataSer, setDataSer] = useContext(UserContext); // This isn't the correct usage

    return (
        <div>
            <div>
                <h1>Received Data: {data}</h1>
            </div>
            <div>
                <Button onClick={() => setDataSer(dataSer + 1)}>click</Button>
                {dataSer}
            </div>
        </div>
    );
}

export default ChildComponent;


