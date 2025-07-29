import React from "react";

function Hello() {
    return (
        <div>
            <h1>Public Public Component</h1>
            ********************************
            <Hello1 />
        </div>
    );
}

//Private Component
function Hello1() {
    return (
        <div>
            <h1>Public Private Component</h1>
        </div>
    );
}

export default Hello;