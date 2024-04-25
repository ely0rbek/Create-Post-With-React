import React, { useEffect, useState } from "react";
import Salom from "./Navbar";

function State1(){
    const [til,language]=useState('uz');
    useEffect(()=>{
        
    })

    return(
        <>
        <h1>{til}</h1>
        <select onChange={(e)=>language(e.target.value)}>
            <option value={'uz'}>uz</option>
            <option value={'en'}>en</option>
            <option value={'ru'}>ru</option>
        </select>
        </>
    )
}
export default State1;