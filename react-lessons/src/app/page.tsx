import React from "react";
import TestTsx from "./Components/Test-basics/testTsx";
import CaptureValue from "./Components/Test-basics/PassValueFromParentToChild";
import Hello from "./Components/Test-basics/PublicPrivateComponent";
import WithParam from "./Components/Test-basics/WithParam";
import Welcome from "./Components/Test-basics/Welcome";
import StateManagement from "./Components/Hooks/StateManagement";
import LogInLogOut from "./Components/LogInLogout";
import ReadValue from "./Components/Hooks/ReadValueFromTestBox";

export default function Home() {
  return (
    <div>
      <TestTsx /><br />
      <CaptureValue newValue={1234} /><br />
      <Hello /><br />
      <WithParam id={1} name="Vivek" /><br />
      <Welcome name="Vivek" /><br />
      <StateManagement /> <br />
      <LogInLogOut />
      <ReadValue />
    </div>
  );
}
