import React from "react";
import "./ShoppingForm.css";
const ShoppingForm = () => {
  const nameChangeHandler = () => {};
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("ok");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-shopping__controls">
        <div className="new-shopping__control">
          <label>Name</label>
          <input type="text" onChange={nameChangeHandler}></input>
        </div>
        <div className="new-shopping__control">
          <label>Amount</label>
          <input type="number" min="0.10" step="0.05" />
        </div>
        <div className="new-shopping__control">
          <label>Quantity</label>
          <input type="number" min="1" step="1" />
        </div>
        <div className="new-shopping__control">
          <label>Date</label>
          <input type="date" min="2023-1-1"></input>
        </div>
      </div>
      <div className="new-shopping__actions">
        <button type="submit">Add Shopping</button>
      </div>
    </form>
  );
};
export default ShoppingForm;
