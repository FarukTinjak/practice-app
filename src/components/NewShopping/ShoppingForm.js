import React, { useState } from "react";
import "./ShoppingForm.css";
const ShoppingForm = () => {
  //   const [enteredName, SetEndeteredName] = useState("");
  //   const [enteredAmount, SetEndeteredAmount] = useState("");
  //   const [enteredQuantity, SetEndeteredQuantity] = useState("");
  //   const [enteredDate, SetEndeteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredName: "",
    enteredAmount: "",
    enteredQuantity: "",
    enteredDate: "",
  });

  const nameChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredName: event.target.value,
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };
};
const quantityChangeHandler = (event) => {
  setUserInput({
    ...userInput,
    enteredQuantity: event.target.value,
  });
};
const dateChangeHandler = (event) => {
  setUserInput({
    ...userInput,
    enteredDate: event.target.value,
  });
};

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
        <input
          type="number"
          min="0.10"
          step="0.05"
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-shopping__control">
        <label>Quantity</label>
        <input
          type="number"
          min="1"
          step="1"
          onChange={quantityChangeHandler}
        />
      </div>
      <div className="new-shopping__control">
        <label>Date</label>
        <input type="date" min="2023-1-1" onChange={dateChangeHandler}></input>
      </div>
    </div>
    <div className="new-shopping__actions">
      <button type="submit">Add Shopping</button>
    </div>
  </form>
);

export default ShoppingForm;
