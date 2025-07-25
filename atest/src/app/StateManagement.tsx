"use client";
import React from "react";
import { useState } from "react";


function StateManagement(){
    const [name, setName] = useState("Editor");
    const [show, setShow] = useState(false);
    const [add, setAdd] = useState(0);
    

    function ChangeName() {
        if (name === "Editor") { setName("Daksh"); }
        else { setName("Editor"); }
    }

    return (
        <div>

            <button onClick={() => ChangeName()}
            style={{
                backgroundColor: "silver",
                color: "pink",
                padding: "6px",
                borderRadius: "2px",
                fontWeight: "bold",
                fontFamily: "Arial, sans-serif"
            }}> <strong>Change Name</strong>
            </button>
            <br></br>
            <br></br>
            <button onClick={() => setShow(!show)}
            style={{
                backgroundColor: "orange",
                color: "white",
                padding: "6px",
                borderRadius: "5px",
                fontWeight: "bold",
                fontFamily: "Arial, sans-serif"
            }}> Show </button>
            <br></br>
            <br></br>
            { show && (
            <h1 style={{
                color: "blue",
                fontSize: "24px",
                fontFamily: "Verdana, sans-serif",
                textAlign: "center",
                margin: "10px 0"
            }}>
                State Management {name}
            </h1>    
            )}
            
            <button onClick={() => setAdd(add + 1)} style={{
                backgroundColor: "silver",
                color: "red",
                padding: "6px",
                borderRadius: "5px",
                fontWeight: "bold",
                fontFamily: "Arial, sans-serif"
            }}> <strong>ADD</strong> </button>
            <br></br>
            <br></br>
            <button onClick={() => setAdd(0)} style={{
                backgroundColor: "silver",
                color: "red",
                padding: "6px",
                borderRadius: "5px",
                fontWeight: "bold",
                fontFamily: "Arial, sans-serif"
            }}> <strong>RESET</strong> </button>
            <br></br>
            <br></br>
            <button onClick={() => setAdd(add - 1)}style={{
                backgroundColor: "silver",
                color: "red",
                padding: "6px",
                borderRadius: "5px",
                fontWeight: "bold",
                fontFamily: "Arial, sans-serif"
            }}> <strong>SUB</strong> </button>
            <br></br>
            <br></br>
            <div style={{
                backgroundColor: "orange",
                width: "fit-content",
                color: "white",
                padding: "1px",
                borderRadius: "5px",
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "Arial, sans-serif"
            }}>
                Count is {add}
            </div>
        </div>
    );
}

export default StateManagement