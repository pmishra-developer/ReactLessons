'use client';
import { useState } from "react";

function ReadValue() {

    const [rdTestBox, setRdTestBox] = useState("");
    return (
        <div>
            <input type="text" value={rdTestBox} onChange={(e) => setRdTestBox(e.target.value)} />
            Value in Test Box - {rdTestBox}
        </div>
    )
}
export default ReadValue;