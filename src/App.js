import React from "react";
import Shoppings from "./components/Shoppings/Shoppings";

const App = () => {
  const shoppings = [
    { id: "e1", name: "Milk", amount: 2.0, date: new Date(2023, 4, 16) },
    { id: "e2", name: "Chocolate", amount: 1.67, date: new Date(2023, 4, 16) },
    { id: "e3", name: "Coca-Cola", amount: 2.95, date: new Date(2023, 2, 23) },
    { id: "e4", name: "Lemon", amount: 5.12, date: new Date(2023, 1, 11) },
  ];
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started"),
    React.createElement(Shoppings, { items: shoppings })
  );
  /* return (
    <div>
      <h2>Let's get started!</h2>
      <Shoppings items={shoppings} />
    </div>
  ); */
};

export default App;
