import React from "react";
import "./ShoppingItem.css";
import ShoppingDate from "./ShoppingDate";
import Card from "../UI/Card";

const ShoppingItem = (props) => {
  let title = props.title;
  const clickHandler = () => {
    title = "Updated";
  };

  return (
    <Card className="shopping-item">
      <ShoppingDate date={props.date} />
      <div className="shopping-item__name">
        <h2>{props.name}</h2>
        <div className="shopping-item__quantity_container">
          <button className="counter counter-decrement">-</button>
          <div className="shopping-item__quantity">{props.quantity}</div>
          <button className="counter counter-increment">+</button>
        </div>
        <div className="shopping-item__price">{props.amount.toFixed(2)}KM</div>
      </div>
      <button onClick={clickHandler}>Change name</button>
    </Card>
  );
};
export default ShoppingItem;
