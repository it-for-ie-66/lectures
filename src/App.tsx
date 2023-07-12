import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Files from "./components/Files";
import useData from "./lib/useData";
function App() {
  useData();

  return (
    <div>
      <Files />
    </div>
  );
}

export default App;
