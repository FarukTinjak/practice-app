import React, { useState } from "react";
import "./NewShopping.css";
import ShoppingForm from "./ShoppingForm";
const NewShopping = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const isEditingHandler = () => {
    setIsEditing(true);
  };
  const noEditingHandler = () => {
    setIsEditing(false);
  };
  const saveShoppingDataHandler = (enteredShoppingData) => {
    const shoppingData = {
      ...enteredShoppingData,
      id: Math.random().toString(),
    };

    props.onAddShopping(shoppingData);
    setIsEditing(false);
  };
  return (
    <div className="new-shopping">
      {!isEditing && (
        <button onClick={isEditingHandler}>Add New shopping</button>
      )}
      {isEditing && (
        <ShoppingForm
          onSaveShoppingData={saveShoppingDataHandler}
          onCancel={noEditingHandler}
        />
      )}
    </div>
  );
};
export default NewShopping;
