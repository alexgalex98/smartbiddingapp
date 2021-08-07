import { ReactReduxContext } from "react-redux";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";

const Search = ({ items }) => {
  const [q, setQ] = useState("");
  const [searchParam] = useState(["prodname", "category"]);
  const [filterParamCategory, setFilterParamCategory] = useState(["All"]);
  const [filterParamCondition, setFilterParamCondition] = useState(["All"]);

  function searchItems(items) {
    console.log(filterParamCondition, "CONDD");
    return items.filter((item) => {
      //console.log(item.condition_, "BBBBBB");
      // in here we check if our region is equal to our c state
      // if it's equal to then only return the items that match
      // if not return All the countries
      if (item.category == filterParamCategory) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (item.condition_ == filterParamCondition) {
        // console.log("POTRIVIT");
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParamCategory == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }
  return (
    <div>
      {/* <div>
        <select
          onChange={(e) => {
            setFilterParamCategory(e.target.value);
          }}
          className="custom-select"
          aria-label="Filter Countries By Category"
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Sports">Sports</option>
          <option value="Health & Beauty">Health & Beauty</option>
          <option value="Toys">Toys</option>
          <option value="Home & Garden">Home & Garden</option>
        </select>
        <span className="focus"></span>
        <select
          onChange={(e) => {
            setFilterParamCondition(e.target.value);
          }}
          className="custom-select"
          aria-label="Filter Countries By Condition"
        >
          <option value="All">All</option>
          <option value="New">New</option>
          <option value="Used">Used</option>
        </select>
        <span className="focus"></span>
      </div> */}
      <div className="search-wrapper">
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search for..."
            value={q}
            /*
                            // set the value of our useState q
                            //  anytime the user types in the search box
                            */
            onChange={(e) => setQ(e.target.value)}
          />
          <span className="sr-only">Search countries here</span>
        </label>
      </div>
      <div>
        {
          <Container className="cardlist">
            <Row>
              {searchItems(items).map((item) => {
                return (
                  <Col className="col-md-6 col-lg-3 col-xs-12">
                    <Card
                      id={item.id}
                      prodName={item.prodname}
                      startPrice={item.startprice}
                      category={item.category}
                      buyNowPrice={item.buynowprice}
                      description={item.description}
                      condition={item.condition_}
                      image={item.image}
                      secondsLeft={item.secondsleft}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        }
      </div>
    </div>
  );
};

export default Search;
