import { useState } from "react";
import InstructionsComponent from "../components/InstructionsComponent";
import TextAreaComponent from "../components/TextAreaComponent";

function Write() {
  return (
    <main className="main-write">
      <InstructionsComponent />
      <TextAreaComponent />
    </main>
  );
}

export default Write;
