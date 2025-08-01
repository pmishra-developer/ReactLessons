import { useState } from "react";
import Welcome from "../Session-1/Welcome";

function LogInLogOut() {
    const [LogInVivek, setLogInVivek] = useState(false);
    return (
        <div>
            {LogInVivek ? (
                <div>
                    <p>Welcome Back</p>
                    <Welcome name="Vivek" />
                    <button onClick={() => setLogInVivek(false)}>Log Out</button>
                </div>) : (
                <div>
                    <p>Please Log In </p>
                    <button onClick={() => setLogInVivek(true)}>Log In</button>
                </div>
            )
            }
        </div>
    )
}
export default LogInLogOut;