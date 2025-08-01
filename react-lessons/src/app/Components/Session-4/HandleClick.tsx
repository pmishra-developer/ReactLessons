'use client'

import { useState } from "react"

function HandleClick() {

    const [message, setMessage] = useState("");

    function clickHandler() {
        setMessage("Button clicked!");
    }

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setMessage(e.target.value);
    }

    return (
        <div>
            {/* On Monse Click */}
            <button onClick={clickHandler}>Click Me</button>
            {/* On Mouse Hover */}
            <button onMouseOver={clickHandler}>Hover Me</button>
            {/* On Mouse Leave */}

            {/* TextBox */}
            <input type="text" onChange={handleInput}
                className="border-2 border-gray-300 rounded-md p-2 m-2"
                placeholder="Type something..." />

        </div>
    )
}
export default HandleClick;
