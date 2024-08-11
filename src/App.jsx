import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemGrid from "./components/ItemGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-screen-2xl mx-auto mt-5 bg-white">
      <Navbar />
      <ItemGrid />
    </div>
  );
}

export default App;
