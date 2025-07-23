"use client";
import React, { useState } from "react";
import StateManagement from "./StateManagement";

function GameManagement() {
  const [selectedWorld, setSelectedWorld] = useState("");

  return (
    <div>
      {!selectedWorld ? (
        <>
          <button onClick={() => setSelectedWorld("icecream")}>Icecream World</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={() => setSelectedWorld("chocolate")}>Chocolate World</button>
        </>
      ) : (
        <>
          {selectedWorld === "icecream" && <StateManagement selected={selectedWorld} />}
          {selectedWorld === "chocolate" && <StateManagement selected={selectedWorld} />}
        </>
      )}
    </div>
  );
}

export default GameManagement;