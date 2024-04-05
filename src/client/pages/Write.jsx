import { useState } from "react";
import InstructionsComponent from "../components/write/InstructionsComponent";
import TextAreaComponent from "../components/write/TextAreaComponent";

function Write() {
  return (
    <main className="main-write">
      <InstructionsComponent />
      <TextAreaComponent />
    </main>
  );
}

export default Write;
