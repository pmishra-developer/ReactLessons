"use client";
import React,{useState} from "react";

export default function DisplayText(){
    const[inputtext,setinputtext] = useState("");
    const[show,setshow] = useState(false);

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) =>
    {
        setinputtext(event.target.value);
    }

    return(
        <div>
            <h2>"Displayed Text"</h2>
            <input
            type="text"
            placeholder="Enter your name"
            onChange={handleInputChange}
            />
            <button onClick={() => setshow(!show)}> "Enter" </button>
            <br></br>
            <br></br>
            { show &&
            <div><strong>Welcome, {inputtext}!!</strong></div>
            }
        </div>
    );
};

