import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Cart({ cart, setCart }) {
  const [price, setPrice] = useState(0);

  return (
    <div className="py-11 px-24 flex flex-col gap-16">
      {cart?.map((i) => (
        <div key={i.id} className=" flex items-center gap-8">
          <div>
            <img className=" w-40 h-52" src={i.img} alt="item-image" />
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="font-bold">{i.title}</p>
            <p className="text-slate-500 text-xs">-{i.author}</p>
            <p className="font-semibold">Price- ₹{i.price}</p>
            <div className="flex gap-1 items-center">
              <button className="bg-blue-600 text-white rounded-lg px-2 py-1">
                <FontAwesomeIcon icon={faPlus} />
              </button>
              {i.amount}
              <button className="bg-blue-600 text-white rounded-lg px-2 py-1">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <button className="bg-red-600 text-white rounded-lg px-2 py-1 ml-6">
                <FontAwesomeIcon icon={faX} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
