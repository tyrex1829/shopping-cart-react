import React from "react";
import list from "../listOfItems";
import ItemCard from "./ItemCard";

function ItemGrid() {
  return (
    <section className="py-11 px-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-5">
      {list.map((i) => (
        <ItemCard
          key={i.id}
          image={i.img}
          title={i.title}
          price={i.price}
          quantity={i.amount}
          author={i.author}
        />
      ))}
    </section>
  );
}

export default ItemGrid;
