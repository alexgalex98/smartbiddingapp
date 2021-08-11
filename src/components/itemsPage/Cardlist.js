import React from "react";

import "../../styles/Card.css";
import { useState } from "react";
import Filter from "./Filter";

const CardList = ({ items, fetchExpired }) => {
  const [filterParamStartpriceMin, setPararmStartpriceMin] = useState(1);
  const [filterParamStartpriceMax, setPararmStartpriceMax] = useState(50);

  const [value, setValue] = React.useState([2, 10]);

  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setPararmStartpriceMin(newValue[0]);
    setPararmStartpriceMax(newValue[1]);
    setValue(newValue);
    console.log(newValue);
  };
  console.log(items, "ITEMEMEMEMEME");
  return (
    <div className="wrapper">
      <div>{<Filter items={items} fetchExpired={fetchExpired}></Filter>}</div>
    </div>
  );
};

export default CardList;
