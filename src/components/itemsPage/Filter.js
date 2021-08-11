import React, { useState } from "react";
import Search from "./Search";
import "../../styles/Filter.css";
import Slider from "@material-ui/core/Slider";

const Filter = ({ items, fetchExpired }) => {
  const [filterParamStartpriceMin, setPararmStartpriceMin] = useState(1);
  const [filterParamStartpriceMax, setPararmStartpriceMax] = useState(5000);
  const marks = [
    {
      value: 1,
      label: "1$",
    },
    {
      value: 500,
      label: "500$",
    },
    {
      value: 1000,
      label: "1000$",
    },
    {
      value: 1500,
      label: "1500$",
    },
  ];
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
    <div className="auctionPage">
      <div className="filterDiv">
        {console.log(filterListCategory, "FILLLLTER")}
        <form>
          <div className="cd-filter-block">
            <div className="accordion-item filtercolapse">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed dorpdownfilter"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Category
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse "
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <ul class="cd-filter-content cd-filter list">
                  {filterListCategory.map((filter) => (
                    <li>
                      <React.Fragment>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id={filter.id}
                          onClick={() => onFilterChangeCategory(filter.value)}
                        />
                        <label>{filter.name}</label>
                      </React.Fragment>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </form>
        <form>
          <div className="cd-filter-block">
            <div className="accordion-item filtercolapse">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed dorpdownfilter"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Condition
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse "
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <ul class="cd-filter-content cd-filter list">
                  {filterListCondition.map((filter) => (
                    <li>
                      <React.Fragment>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id={filter.id}
                          onClick={() => onFilterChangeCondition(filter.value)}
                        />
                        <label>{filter.name}</label>
                      </React.Fragment>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </form>
        <div className="accordion-item filtercolapse ">
          <h2
            className="accordion-header dorpdownfilter"
            id="flush-headingFour"
          >
            <button
              className="accordion-button collapsed  dorpdownfilter"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              Price Range
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse "
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div
              style={{
                margin: "auto",
                display: "block",
                width: "90%",
                marginTop: "30px",
              }}
            >
              <Slider
                min={1}
                max={1500}
                value={value}
                onChange={rangeSelector}
                valueLabelDisplay="auto"
                marks={marks}
              />
            </div>
          </div>
        </div>
      </div>
      <Search items={UniquefilteredList} fetchExpired={fetchExpired}></Search>
    </div>
  );
};

export default Filter;
