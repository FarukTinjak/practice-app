import React from "react";
import "./NewShopping.css";
import ShoppingForm from "./ShoppingForm";
const NewShopping = (props) => {
  const saveShoppingDataHandler = (enteredShoppingData) => {
    const shoppingData = {
      ...enteredShoppingData,
      id: Math.random().toString(),
    };

    props.onAddShopping(shoppingData);
  };
  return (
    <div className="new-shopping">
      <ShoppingForm onSaveShoppingData={saveShoppingDataHandler} />
    </div>
  );
};
export default NewShopping;
