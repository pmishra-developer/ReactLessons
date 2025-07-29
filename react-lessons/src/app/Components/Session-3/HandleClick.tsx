import { useState } from "react";

function HandleClick() {

    const [message, setMessage] = useState("");

    function handleClick() {
        alert("Button Event Hit");
    }

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setMessage(e.target.value);
    }

    return (
        <div>
            <button onChange={handleClick}>Change</button>
            <br />
            {message}
            <br />
            <input type="text" onChange={handleInput}
                placeholder="Enter SOmething" />
        </div>
    )
}
export default HandleClick;