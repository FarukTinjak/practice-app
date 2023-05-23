import React, { useState } from "react";
import "./ShoppingForm.css";
const ShoppingForm = (props) => {
  const [enteredName, SetEndeteredName] = useState("");
  const [enteredAmount, SetEndeteredAmount] = useState("");
  const [enteredQuantity, SetEndeteredQuantity] = useState(1);
  const [enteredDate, SetEndeteredDate] = useState("2023-05-22");

  // const [userInput, setUserInput] = useState({
  //   enteredName: "",
  //   enteredAmount: "",
  //   enteredQuantity: "",
  //   enteredDate: "",
  // });

  const nameChangeHandler = (event) => {
    SetEndeteredName(event.target.value); // setUserInput({
    //   ...userInput,
    //   enteredName: event.target.value,
    // });
  };
  const amountChangeHandler = (event) => {
    SetEndeteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const quantityChangeHandler = (event) => {
    SetEndeteredQuantity(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredQuantity: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    SetEndeteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const validateFormHandler = () => {
    if (enteredName.trim().length === 0) {
      return false;
    }
    return true;
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!validateFormHandler()) {
      return;
    }
    const shoppingData = {
      title: enteredName,
      amount: +enteredAmount,
      quantity: enteredQuantity,
      date: new Date(enteredDate),
    };

    props.onSaveShoppingData(shoppingData);
    SetEndeteredName("");
    SetEndeteredAmount("");
    SetEndeteredQuantity("");
    SetEndeteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-shopping__controls">
        <div className="new-shopping__control">
          <label>Name</label>
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          ></input>
        </div>
        <div className="new-shopping__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.10"
            step="0.05"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-shopping__control">
          <label>Quantity</label>
          <input
            type="number"
            min="1"
            step="1"
            value={enteredQuantity}
            onChange={quantityChangeHandler}
          />
        </div>
        <div className="new-shopping__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-shopping__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Shopping</button>
      </div>
    </form>
  );
};
export default ShoppingForm;
