import React, { useState } from "react";
import ShoppingItem from "./ShoppingItem";
import Card from "../UI/Card";
import "./Shoppings.css";
import ShoppingsFilter from "./ShoppingsFilter";
import ShoppingDate from "./ShoppingDate";

const Shoppings = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredShoppings = props.items.filter((shopping) => {
    return shopping.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="shoppings">
        <ShoppingsFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredShoppings.map((shopping) => (
          <ShoppingItem
            key={shopping.id}
            name={shopping.name}
            amount={shopping.amount}
            quantity={shopping.quantity}
            date={shopping.date}
          />
        ))}
      </Card>
    </div>
  );
};
export default Shoppings;
