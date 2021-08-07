import React, { useState } from "react";
import Search from "./Search";
import "../../styles/Filter.css";
import Slider from "@material-ui/core/Slider";

const Filter = ({ items }) => {
  const [filterParamStartpriceMin, setPararmStartpriceMin] = useState(1);
  const [filterParamStartpriceMax, setPararmStartpriceMax] = useState(5000);
  const [filterListCategory] = useState([
    {
      id: 11,
      name: "Electronics",
      value: "Electronics",
    },
    {
      id: 12,
      name: "Fashion",
      value: "Fashion",
    },
    {
      id: 13,
      name: "Health & Beauty",
      value: "Health & Beauty",
    },
    {
      id: 14,
      name: "Toys",
      value: "Toys",
    },
    {
      id: 15,
      name: "Home & Garden",
      value: "Home & Garden",
    },
    {
      id: 16,
      name: "Sports",
      value: "Sports",
    },
  ]);
  const [filterListCondition] = useState([
    {
      id: 17,
      name: "New",
      value: "New",
    },
    {
      id: 18,
      name: "Used",
      value: "Used",
    },
  ]);
  const [activeFilterCategory, setActiveFilterCategory] = useState([]);
  const [activeFilterCondition, setActiveFilterCondition] = useState([]);

  const onFilterChangeCategory = (filter) => {
    if (activeFilterCategory.includes(filter)) {
      const filterIndex = activeFilterCategory.indexOf(filter);
      const newFilter = [...activeFilterCategory];
      newFilter.splice(filterIndex, 1);
      setActiveFilterCategory(newFilter);
    } else {
      setActiveFilterCategory([...activeFilterCategory, filter]);
    }
    console.log(activeFilterCategory, "FILTRE ACTIVE");
  };

  const onFilterChangeCondition = (filter) => {
    if (activeFilterCondition.includes(filter)) {
      const filterIndex = activeFilterCondition.indexOf(filter);
      const newFilter = [...activeFilterCondition];
      newFilter.splice(filterIndex, 1);
      setActiveFilterCondition(newFilter);
    } else {
      setActiveFilterCondition([...activeFilterCondition, filter]);
    }
  };
  let filteredList = [];
  let UniquefilteredList = [];

  if (activeFilterCondition.length === 0 && activeFilterCategory.length === 0) {
    for (let i = 0; i < items.length; i++) {
      if (
        items[i].startprice <= filterParamStartpriceMax &&
        items[i].startprice >= filterParamStartpriceMin
      ) {
        filteredList.push(items[i]);
      }
    }
    console.log(filteredList, "ITEME FILTRATE");
    UniquefilteredList = [...new Set(filteredList)];
  } else if (activeFilterCondition.length === 0) {
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < activeFilterCategory.length; j++) {
        console.log(items[i].category, activeFilterCategory[j], "IN FORRR");
        if (
          items[i].category === activeFilterCategory[j] &&
          items[i].startprice <= filterParamStartpriceMax &&
          items[i].startprice >= filterParamStartpriceMin
        ) {
          filteredList.push(items[i]);
          console.log("FIFIFIIFI");
        }
      }
      console.log(filteredList, "ITEME FILTRATE");
      UniquefilteredList = [...new Set(filteredList)];
    }
  } else if (activeFilterCategory.length === 0) {
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < activeFilterCondition.length; j++) {
        console.log(items[i].condition, activeFilterCondition[j], "IN FORRR");
        if (
          items[i].condition_ === activeFilterCondition[j] &&
          items[i].startprice <= filterParamStartpriceMax &&
          items[i].startprice >= filterParamStartpriceMin
        ) {
          filteredList.push(items[i]);
          console.log("FIFIFIIFI");
        }
      }
      console.log(filteredList, "ITEME FILTRATE");
      UniquefilteredList = [...new Set(filteredList)];
    }
  } else {
    console.log(activeFilterCategory, "Cat", activeFilterCondition, "cond");
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < activeFilterCategory.length; j++) {
        for (let k = 0; k < activeFilterCondition.length; k++) {
          console.log(items[i].category, activeFilterCategory[j], "IN FORRR");
          if (
            items[i].category === activeFilterCategory[j] &&
            items[i].condition_ === activeFilterCondition[k] &&
            items[i].startprice <= filterParamStartpriceMax &&
            items[i].startprice >= filterParamStartpriceMin
          ) {
            filteredList.push(items[i]);
            console.log("FIFIFIIFI");
          }
        }
      }
    }
    console.log(filteredList, "ITEME FILTRATE");
    UniquefilteredList = [...new Set(filteredList)];
  }

  const [value, setValue] = React.useState([1, 1500]);
  const rangeSelector = (event, newValue) => {
    setPararmStartpriceMin(newValue[0]);
    setPararmStartpriceMax(newValue[1]);
    setValue(newValue);
    console.log(newValue);
  };
  console.log(
    filterParamStartpriceMax,
    "MASXXX",
    filterParamStartpriceMin,
    "<MINN"
  );
  return (
    <div>
      {/* <div>
        Category Pick
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="Electronics"
          />
          <label class="form-check-label" for="inlineCheckbox1">
            Electronics
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="Fashion"
          />
          <label class="form-check-label" for="inlineCheckbox2">
            Fashion
          </label>
        </div>
      </div>
      <div>
        Condition Pick
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox1"
            value="New"
          />
          <label class="form-check-label" for="inlineCheckbox1">
            New
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox2"
            value="Used"
            onClick={()=>onFilterChangeCondition(this.value)}
          />
          <label class="form-check-label" for="inlineCheckbox2">
            Used
          </label>
        </div>
      </div> */}
      <div
        style={{
          margin: "auto",
          display: "block",
          width: "330px",
          marginTop: "50px",
        }}
      >
        Price Range
        <Slider
          min={1}
          max={1500}
          value={value}
          onChange={rangeSelector}
          valueLabelDisplay="auto"
        />
      </div>
      {console.log(filterListCategory, "FILLLLTER")}
      <form>
        {filterListCategory.map((filter) => (
          <React.Fragment>
            <label>{filter.name}</label>
            <input
              class="form-check-input"
              type="checkbox"
              id={filter.id}
              onClick={() => onFilterChangeCategory(filter.value)}
            />
          </React.Fragment>
        ))}
      </form>
      <form>
        {filterListCondition.map((filter) => (
          <React.Fragment>
            <label>{filter.name}</label>
            <input
              class="form-check-input"
              type="checkbox"
              id={filter.id}
              onClick={() => onFilterChangeCondition(filter.value)}
            />
          </React.Fragment>
        ))}
      </form>
      <Search items={UniquefilteredList}></Search>
    </div>
  );
};

export default Filter;
