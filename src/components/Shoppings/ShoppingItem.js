import React, { useState } from "react";
import "./ShoppingItem.css";
import ShoppingDate from "./ShoppingDate";
import Card from "../UI/Card";

const ShoppingItem = (props) => {
  const [name, setName] = useState(props.name);
  const [quantity, setQuantity] = useState(props.quantity);
  const [amount, setAmount] = useState(props.amount);
  const [date, setDate] = useState(props.date);
  const editHandler = (event) => {
    setName(event.target.value);
  };
  const incrementHandler = () => {
    setQuantity(parseInt(quantity) + 1);
  };
  const decrementHandler = () => {
    if (quantity >= 2) setQuantity(quantity - 1);
  };

  return (
    <Card className="shopping-item">
      <ShoppingDate date={date} />
      <div className="shopping-item__name">
        <input defaultValue={name} onChange={editHandler} />

        <div className="shopping-item__quantity_container">
          <button
            onClick={decrementHandler}
            className="counter counter-decrement"
          >
            -
          </button>
          <div className="shopping-item__quantity">{quantity}</div>
          <button
            onClick={incrementHandler}
            className="counter counter-increment"
          >
            +
          </button>
        </div>
        <div className="shopping-item__price">
          {(amount * quantity).toFixed(2)}KM
        </div>
      </div>
    </Card>
  );
};
export default ShoppingItem;
