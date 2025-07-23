"use client";
import React,{useState} from "react";

function plusminus (){
const[count,SetCount] = useState(0);
const[name,Setname] = useState("Ankit Gandhi");

function handleNameChange() {
    if(name == "Ankit Gandhi")
        Setname("Barani");
    else
        Setname("Ankit Gandhi");
}

function handleClick(add: boolean) {
    console.log("Before Count:", count);
    if (add) {
        SetCount(count + 1);
    } else {
        SetCount(count - 1);
    }
    console.log("After Count:", count);

}
return (
    <div>
        <div>Name: {name}</div>
        <button onClick={() => handleNameChange()}>Change Name</button>    
           <div>You have Clicked {count} times</div>
           <br />
           <br />
           <div>
            <button onClick={() => handleClick(true)}>Plus</button>
            <br />
           <br />
            <button onClick={() => handleClick(false)}>Minus</button>          
           </div>
    </div>
    );
}

export default plusminus;