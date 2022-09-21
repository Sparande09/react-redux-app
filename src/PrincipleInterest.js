import React, { useState } from "react";

export function CalculatePrincpleInterest(){
    const [P,setP]=useState(0);
    const [T,setT]=useState(0);
    const [R, setR]=useState(0);
    const [I,setI]=useState(0);

    const calculatePrincpleInterest=() => {
        const result = (P *T *R) / 100;
        setI(result);
    }

    console.log(P,T,R);

    return(
        <div>
            
            <h1> Principle Interest Calculator</h1>
            <div>P:<input type='number' onChange={e=>setP(e.target.value)}/></div>
            <div>T:<input type='number' onChange={e=>setT(e.target.value)}/></div>
            <div>R:<input type='number' onChange={e=>setR(e.target.value)}/></div>
            <button onClick={calculatePrincpleInterest}> Calculate </button>
            <div> Interest:<h1>{I}</h1></div>
            <div>Total:<h2>{parseInt(P)+parseInt(I)}</h2></div>

        </div>
    )
}
export default CalculatePrincpleInterest;