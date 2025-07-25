"use client";
import React,{ useState } from 'react';



function InputText(){
    const [inputValue, setInputValue] = useState("");
    return<div>
        <input 
            type="text" 
            value={inputValue} 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)} 
            placeholder="Type here..." 
            style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontFamily: "Arial, sans-serif"
            }} 
        />
        <p style={{marginTop: "10px"}}>You typed: {inputValue}</p>
    </div>
}
export default InputText