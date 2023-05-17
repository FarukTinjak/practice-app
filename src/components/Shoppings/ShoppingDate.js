import React from "react";
import "./ShoppingDate.css";

const ShoppingDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  return (
    <div className="shopping-date">
      <div className="shopping-date__month">{month}</div>
      <div className="shopping-date__year">{year}</div>
      <div className="shopping-date__day">{day}</div>
    </div>
  );
};
export default ShoppingDate;
