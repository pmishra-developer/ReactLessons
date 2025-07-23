"use client";
import React , { useState } from "react";
function StateManagement({selected}:{selected: String}){
    if(selected==="icecream"){
    const [flavourName,setFlavourName]=useState("");
    const [brandName,setBrandName]=useState("");
    const [count,setCount]=useState(0);
    function handleClick(add: boolean){
        if(add){
           setCount(count+1);  
        }
        else{
            setCount(count-1);  
        }
    }
    function handleFlavourNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFlavourName(event.target.value);
    }
    function handleBrandNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setBrandName(event.target.value);
    }
    return(
        <div>
           <h2> Welcome to Icecream World 🍨 </h2>
           <br></br>
           <div> Enjoy !!! You have Won {count} IceCreams </div>
           <br></br>
           <button onClick={() => handleClick(true)}>Plus</button>
           <br></br>
           <br></br>
           <button onClick={() => handleClick(false)}>Minus</button>
           <br></br>
           <br></br>
           <div>
            <label>Enter Icecream Flavour name: </label>
            <input 
              type="text" 
              value={flavourName} 
              onChange={handleFlavourNameChange} 
              placeholder="Type name here" 
            />
          </div>
          <br />
          <div>Name: {flavourName || "Not entered yet"}</div>
          <br></br>
           <div>
            <label>Enter Icecream Brand name: </label>
            <input 
              type="text" 
              value={brandName} 
              onChange={handleBrandNameChange} 
              placeholder="Type name here" 
            />
          </div>
          <br />
          <div>Name: {brandName || "Not entered yet"}</div>
           
        </div>
    );
}
else{
    const [flavourName,setFlavourName]=useState("");
    const [brandName,setBrandName]=useState("");
    const [count,setCount]=useState(0);
    function handleClick(add: boolean){
        if(add){
           setCount(count+1);  
        }
        else{
            setCount(count-1);  
        }
    }
    function handleFlavourNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFlavourName(event.target.value);
    }
    function handleBrandNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setBrandName(event.target.value);
    }
    return(
        <div>
            
           <h2> Welcome to Chocolate World 🍫 </h2>
           <br></br>
           <div> Enjoy !!! You have Won {count} Chocolates </div>
           <br></br>
           <button onClick={() => handleClick(true)}>Plus</button>
           <br></br>
           <br></br>
           <button onClick={() => handleClick(false)}>Minus</button>
           <br></br>
           <br></br>
           <div>
            <label>Enter Chocolate Flavour name: </label>
            <input 
              type="text" 
              value={flavourName} 
              onChange={handleFlavourNameChange} 
              placeholder="Type name here" 
            />
          </div>
          <br />
          <div>Name: {flavourName || "Not entered yet"}</div>
          <br></br>
           <div>
            <label>Enter Chocolate Brand name: </label>
            <input 
              type="text" 
              value={brandName} 
              onChange={handleBrandNameChange} 
              placeholder="Type name here" 
            />
          </div>
          <br />
          <div>Name: {brandName || "Not entered yet"}</div>
           
        </div>
    ); 
}
}
export default StateManagement;