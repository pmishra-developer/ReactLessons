"use client";
import React,{useState} from "react";

function StateManagement() {
    const[name,Setname] = useState("Ankit Gandhi");
    const[count,SetCount] = useState(0);
    const[show,SetShow] = useState(true);

    return (
    <div>
        <button onClick={() => SetShow(false)}>show</button>
        <button onClick={() => SetCount(count + 1)}>You have clicked {count} times</button>
        {show && (
    <div> I'm a State Management Compononet {name}, {count} </div>)}
    </div>
    );
}

export default StateManagement;