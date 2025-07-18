"use client"

import React, { useState } from 'react';

function StateManagement(){

    const [name, setName] = useState('');

    return (

        
        <div>
        <h1>State Management</h1>
        <p>Rendered text : {name}</p>

        <input 
            type="text" 
            value={name} 
            className="textbox"
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your name" 
        />


        </div>
    );
}

export default StateManagement;