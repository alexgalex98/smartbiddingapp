import { ReactReduxContext } from "react-redux";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
import { FaSearch } from "react-icons/fa";
import "../../styles/Search.css";
import { FaArrowUp } from "react-icons/fa";

const Search = ({ items, fetchExpired }) => {
  const [q, setQ] = useState("");
  const [searchParam] = useState(["prodname"]);
  const [filterParamCategory, setFilterParamCategory] = useState(["All"]);
  const [filterParamCondition, setFilterParamCondition] = useState(["All"]);

  function searchItems(items) {
    console.log(filterParamCondition, "CONDD");
    return items.filter((item) => {
      if (item.category == filterParamCategory) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (item.condition_ == filterParamCondition) {
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
      <div className="search-wrapper">
        <div class="p-1 bg-light rounded rounded-pill shadow-sm searchForm">
          <div class="input-group">
            <div class="input-group-prepend">
              <button
                id="button-addon2"
                type="submit"
                class="btn btn-link text-warning"
              >
                <FaSearch className="searchIcon"></FaSearch>
              </button>

              <label htmlFor="search-form">
                <input
                  type="search"
                  name="search-form"
                  id="search-form"
                  //className="search-input"
                  placeholder="Search for..."
                  aria-describedby="button-addon2"
                  className="form-control border-0 bg-light searchInput"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />

                <span className="sr-only">Search items here</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div>
        {
          <Container className="cardlist">
            <Row>
              {searchItems(items).map((item) => {
                return (
                  <Col className="col-md-6 col-lg-3 col-xs-12">
                    <Card
                      fetchExpired={fetchExpired}
                      id={item.id}
                      prodName={item.prodname}
                      startPrice={item.startprice}
                      category={item.category}
                      buyNowPrice={item.buynowprice}
                      description={item.description}
                      condition={item.condition_}
                      image={item.image}
                      secondsLeft={item.secondsleft}
                      currentPrice={item.currentprice}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        }
      </div>
      <a href="#top">
        <button id="myBtn" title="Go to top">
          <FaArrowUp></FaArrowUp>
        </button>
      </a>
    </div>
  );
};

export default Search;
