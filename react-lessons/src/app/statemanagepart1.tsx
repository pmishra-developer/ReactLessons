"use client";
import React,{useState} from "react";

function Statemanegment1 (){
const[count1,SetCount] = useState(10);
return (
    <div>
        <div>
            <button onClick={() => SetCount(count1 + 1)}>You have clicked {count1} times</button>
            <br />
        </div>
        <div>     
            <button onClick={() => SetCount(count1 + 1)}>Plus {count1}</button>
            <br />
            <br />
            <button onClick={() => SetCount(count1 - 1)}>Minus {count1}</button> 
        </div>     
    </div>
    );
}

export default Statemanegment1;