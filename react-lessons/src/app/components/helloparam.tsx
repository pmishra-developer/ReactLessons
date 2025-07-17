import React from 'react';

interface HelloProps {
    name?: string;
}

function HelloParam({name}: HelloProps) {
    return (
        <div>
            <h1>Hello, {name} With Parameter</h1>
            <p>Welcome to my React application.</p>
        </div>
    );
}

export default HelloParam;