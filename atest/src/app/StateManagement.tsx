"use client";
import React from "react";
import { useState } from "react";


function StateManagement(){
    const [name, setName] = useState("Editor");
    const [show, setShow] = useState(false);
    const [add, setAdd] = useState(0);
    const [hide, setHide] = useState(false);
    
    // Change Name logic function
    function ChangeName() {
        if (name === "Editor") { setName("Daksh"); }
        else { setName("Editor"); }
    }

    // Hide and Show logic function
    function HideShow() {
        if (hide) {
            setHide(false);
        } else {
            setHide(true);
        }
    }

    // return of StateManagement component
    return (
        <div>

            {/* Change name button  */}
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
            
            {/* Hide and Show button */}
            {
                hide ? 
                <div><button onClick={() => { setShow(!show); HideShow(); }}
                style={{
                    backgroundColor: "orange",
                    color: "white",
                    padding: "6px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    fontFamily: "Arial, sans-serif"
                }} > Hide </button> 
                </div>
                : <div><button onClick={() => {setShow(!show); HideShow(); }}   
                style={{
                    backgroundColor: "orange",
                    color: "white",
                    padding: "6px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    fontFamily: "Arial, sans-serif"
                }}> Show </button></div>
            } 

            <br></br>

             {/* Show and Hide Content */}
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
            
             {/* Increment button */}
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
            
             {/* Reset button */}
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
            
            {/* // Decrement button */}
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
            
            {/* // Display count */}
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