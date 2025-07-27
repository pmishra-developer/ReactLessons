import { useState } from "react";

function StateManagement() {
    const [name, setName] = useState("Vivek");
    const [count, setCount] = useState(0);

    function handleCount(add: boolean) {
        if (add) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }

    function handleName(name: string) {
        if (name == "Vivek") {
            setName("Vihaan");
        } else {
            setName("Vivek");
        }
    }
    return (
        <div>
            <h1>State Management For Count</h1> <br />
            <button onClick={() => handleCount(true)}>Plus</button> <br />
            <button onClick={() => handleCount(false)}>Minus</button>
            <br />
            <h1>State Management For Name</h1> <br />
            <button onClick={() => handleName("Vivek")}></button>
            <button onClick={() => handleName("Vihaan")}></button>
        </div>
    )
}
export default StateManagement;