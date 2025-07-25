import Welcome from "./Components/Welcome";
import WithParams from "./Components/WithParams";
import StateManagement from "./Components/StateManagement";
import DisplayText from "./Components/SMDisplayText";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Hi, Sheron!
      <Welcome/>
      <WithParams name="SHERON" city="Puducherry" />
      <StateManagement />
      <DisplayText/>
    </div>
  );
}