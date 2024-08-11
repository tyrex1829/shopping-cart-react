import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-screen-2xl mx-auto mt-5">
      <Navbar />
    </div>
  );
}

export default App;
