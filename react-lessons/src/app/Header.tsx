"use client";
import React,{useState}  from 'react';
export default function Header() {

    const [count, setCount] = useState(0);
    const [Show, setShow] = useState(true);
    const [Name, setName] = useState("");
    return (
        <div>
            <button onClick={() => setShow(!Show)}>Show Content</button>
            <input
                type="text"
                value={Name}
                onChange={e => setName(e.target.value)}
                placeholder="Type your name..."
                style={{ marginLeft: "10px" }}
            />
            <h1>Hello{Name}</h1>
            {Show && 
                <div>
                    <button onClick={() => setCount(count - 1)}>Minus-</button>
                    <h1>{count}</h1>
                    <button onClick={() => setCount(count + 1)}>Plus+</button>
                </div>

            }
       </div>
    );
    
    
}