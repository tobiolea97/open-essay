import { useState } from "react";
import InstructionsComponent from "./components/InstructionsComponent";

import "./App.css";
import HeaderComponent from "./components/Header";
import TextAreaComponent from "./components/TextAreaComponent";

function App() {
  return (
    <div className="app">
      <HeaderComponent />
      <main>
        <InstructionsComponent />
        <TextAreaComponent />
      </main>
    </div>
  );
}

export default App;
