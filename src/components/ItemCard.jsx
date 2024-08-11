import React from "react";

function ItemCard({
  image,
  title,
  price,
  quantity,
  author,
  handleClick,
  item,
}) {
  return (
    <div className="flex flex-col p-5 hover:shadow-lg rounded-lg cursor-pointer">
      <div className="flex justify-center">
        <img src={image} alt="item-image" className=" w-40 h-52" />
      </div>
      <div className=" flex flex-col mt-4 text-center gap-2">
        <p className="font-bold">{title}</p>
        <p className="text-slate-500 text-xs">-{author}</p>
        <p className="font-semibold">Price- ₹{price}</p>
        <button
          onClick={() => handleClick(item)}
          className="bg-blue-600 hover:bg-blue-800 rounded-xl py-2 mx-auto px-4 text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
