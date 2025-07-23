"use client";
import React , { useState } from "react";
import StateManagement from "./StateManagement";
import GameManagement from "./GameManagement";
function LoginManagement(){
    const [login,setLogin]=useState(false);
    return(
        <div>
            {login ? 
            (
                <>
                  <GameManagement/>
                  <br></br>
                  <br></br>
                  <button onClick={()=>setLogin(false)}>LogOut</button>
                </>
            ):
            (
              <>
              <p>Sorry, You are not Logged in</p>
              <br></br>
              <br></br>
              <button onClick={()=>setLogin(true)}>LogIn</button>
              </>
            )}
        </div>
    );
}
export default LoginManagement;