import HomePage from "./Home";
import React from "react";
import StateManagement from "./StateManagement";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       
    <HomePage name = " @Daksh "/>
    <HomePage name = "Counter"/>
   
    <StateManagement />
    </div>
  );
}
