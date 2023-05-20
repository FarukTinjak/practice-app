import React from "react";

import "./ShoppingsFilter.css";

const ShoppingsFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="shoppings-filter">
      <div className="shoppings-filter__control">
        <label>Filter by year</label>
        <select
          value={props.selected}
          className="shoppings-filter__select"
          onChange={dropdownChangeHandler}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ShoppingsFilter;
