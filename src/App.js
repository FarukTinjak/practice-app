import React from "react";
import Shoppings from "./components/Shoppings/Shoppings";
import NewShopping from "./components/NewShopping/NewShopping";
const App = () => {
  const shoppings = [
    {
      id: "e1",
      name: "Milk",
      quantity: 7,
      amount: 2.2434,
      date: new Date(2023, 4, 16),
    },
    {
      id: "e2",
      name: "Chocolate",
      quantity: 1,
      amount: 1.67232,
      date: new Date(2023, 4, 16),
    },
    {
      id: "e3",
      name: "Coca-Cola",
      quantity: 3,
      amount: 2.9325,
      date: new Date(2023, 2, 23),
    },
    {
      id: "e4",
      name: "Lemon",
      quantity: 12,
      amount: 5.2312,
      date: new Date(2023, 1, 11),
    },
  ];
  const addShoppingHandler = (shopping) => {
    console.log("In.App.js");
    console.log(shopping);
  };
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started"),
  //   React.createElement(Shoppings, { items: shoppings })
  // );
  return (
    <div>
      <NewShopping onAddShopping={addShoppingHandler} />
      <Shoppings items={shoppings} />
    </div>
  );
};

export default App;
