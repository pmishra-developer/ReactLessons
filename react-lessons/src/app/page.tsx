import React from "react";
import TestTsx from "./Components/testTsx";
import CaptureValue from "./Components/PassValueFromParentToChild";
import Hello from "./Components/PublicPrivateComponent";

export default function Home() {
  return (
    <div>
      <TestTsx/>
      <hr/>
      <CaptureValue newValue={1234}/>
      <hr/>
      <Hello/>
    </div>
  );
}
