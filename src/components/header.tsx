import React from "react";
import { DarkModeToggle } from "./darkModeToggle";

export function Header(): React.ReactElement {
  return (
    <header className="w-full relative flex justify-center p-4 border-b-2 ">
      <div className="absolute right-10">
        <DarkModeToggle></DarkModeToggle>
      </div>
      <h1 className="font-bold text-3xl">Abena OpenIAM Documentation</h1>
    </header>
  );
}
