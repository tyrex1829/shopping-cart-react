import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ItemGrid from "./components/ItemGrid";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    setCart([...cart, item]);
  };

  return (
    <div className="max-w-screen-2xl mx-auto mt-5 bg-white">
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <ItemGrid handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}

      {warning && alert("Item is already present in your cart")}
    </div>
  );
}

export default App;
