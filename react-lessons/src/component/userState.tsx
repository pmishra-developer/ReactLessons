"use client";
import React, { useState } from 'react';

function InputTextBoxValue() {
  const [name, setname] = useState('ggg');

  return (
    <div>
      <label htmlFor="nameInput">Name:</label>
      <input readOnly
        type="text"
        id="nameInput"
        value={name}
      />
      <p>You typed: {name}</p>
    </div>
  );
}

export default InputTextBoxValue;