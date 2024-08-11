import { ShoppingCartOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Navbar() {
  return (
    <nav className="rounded-lg flex justify-between items-center bg-slate-700 py-5 px-10">
      <div className="font-bold text-3xl cursor-pointer">Shopping cart</div>
      <div className=" cursor-pointer">
        <FontAwesomeIcon className="text-3xl" icon={faCartShopping} />
        <span className=" bg-red-600 px-2 font-semibold text-white rounded-3xl text-xl relative top-[-15px]">
          0
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
