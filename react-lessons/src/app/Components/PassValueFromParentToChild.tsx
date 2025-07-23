import React from "react";

function CaptureValue({newValue}:{newValue:number}) {

    console.log("Captured Value:", newValue);

    return (
        <div>
            <h1>Capture Value Component</h1>
            <p>This component captures a value passed from its parent :- {newValue}</p>
            <br />
            <p>Captured Value: {newValue}</p>
        </div>
    );
}
{



}

export default CaptureValue;