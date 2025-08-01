"use client"; 
import React, { useState } from "react";

function EventHandling() {
    const [message, setMessage] = useState("");
    const [todo, setTodo] = useState([
        { id: 1, title: "Learn React", completed: false },
        { id: 2, title: "Learn TypeScript", completed: true },
        { id: 3, title: "Learn Next.js", completed: false },
        { id: 4, title: "Learn Dotnet", completed: true },
        { id: 5, title: "Learn Python", completed: false }
    ]);

    // Handle input change for the message
    function handleInputChange(e: { target: { value: string } }) {
        setMessage(e.target.value);
    }

    // Handle checkbox toggle
    function handleCheckboxToggle(id: number) {
       setTodo((prevTodo) =>
           prevTodo.map((item) =>
               item.id===id ? {... item, completed: !item.completed } : item
           )
       );
    }

    return (
        <div>
            <hr />
            <br />
            <ul>
                {todo.map((item) => (
                    <li key={item.id}>
                        <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => handleCheckboxToggle(item.id)}></input>
                        {item.title} - {item.completed ? "Completed" : "Pending"}
                    </li>
                ))}
            </ul>
            <br />
            <hr />
            <br />
            <input type="text" onChange={handleInputChange}/>
            <br />
            <br />
            <hr />
        </div>
    );
}

export default EventHandling;