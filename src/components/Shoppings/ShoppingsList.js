import React from "react";
import ShoppingItem from "./ShoppingItem";
import "./ShoppingsList.css";

const ShoppingsList = (props) => {
  let shoppingContent = (
    <p className="filtered-shoppings_paragraph">No shoppings found.</p>
  );

  if (props.items.length === 0) {
    return <h2 className="shoppings-list__fallback">Found no shoppings.</h2>;
  }
  return (
    <ul className="shoppings-list">
      {props.items.map((shopping) => (
        <ShoppingItem
          key={shopping.id}
          name={shopping.name}
          amount={shopping.amount}
          quantity={shopping.quantity}
          date={shopping.date}
        />
      ))}
    </ul>
  );
};
export default ShoppingsList;
