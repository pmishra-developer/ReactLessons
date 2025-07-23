"use client";
import React, {useState} from "react";

function StateManagement(){
    const[name,setname] = useState("Sheron");
    const[show,setshow] = useState(false);
    const[count,setcount] = useState(0);
    const[loggedin,setloggedin] = useState(false);

    function Display(Add:boolean){
        if(Add){
            setcount(count+1);
        }
        else{
        setcount(count-1);
        }
    }

    function ChangeName(){
        if (name=="Sheron")   
        setname("Adrien")
        else 
        setname("Sheron")
    }

    return( 
    <div>
        <button onClick={() => setshow(!show)}>"Show"</button>
        {show && (
            <div>
                This is State Management function, {name}!
            </div>)
        }

        <br></br>
        <br></br>

        <div>
        {loggedin ? (
        <div>
        <p>Welcome Back!</p>
        <button onClick={() => setloggedin(false)}>"Logout"</button>
        </div>
        ) : (
        <div>
        <p>Please login</p>
        <button onClick={() => setloggedin(true)}>"LogIn"</button>
        </div>
        )}        
        </div>

        <br></br>
        
        <div>The changed name is {name}</div>
        <br></br>
        <button onClick={() => ChangeName()}>ButtonClick="Change Name"</button>
        <br></br>
        <br></br>
        <div>You have clicked {count} times</div>
        <br></br>
        <button onClick={() => Display(true)}>"Plus"</button>
        <br></br>
        <br></br>
        <button onClick={() => Display(false)}>"Minus"</button>
        <br></br>
    </div>
    );
}

export default StateManagement;