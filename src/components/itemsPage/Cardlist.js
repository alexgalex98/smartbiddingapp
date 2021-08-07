import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
import "../../styles/Card.css";
import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Signout from "../SignInRegister/Signout";
import Search from "./Search";
import Filter from "./Filter";

const CardList = ({ items }) => {
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
    // <div>
    /*	{ <Container>
				<Row>
				{
					items.map(item => {
						return (
									<Col xs={12} md={6} lg={3} key={item.id}>
										<Card
												id={item.id}
												prodName ={item.prodname}
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
					})
					
				}
				</Row>
			</Container> }*/

    <div className="wrapper">
      {/* <div
        style={{
          margin: "auto",
          display: "block",
          height: "100px",
          width: "330px",
        }}
      >
        <h3>How to create Price Range Selector in ReactJS?</h3>
        <Typography id="range-slider" gutterBottom>
          Select Price Range:
        </Typography>
        <Slider
          min={1}
          max={50}
          value={value}
          onChange={rangeSelector}
          valueLabelDisplay="auto"
        />
        Your range of Price is between {value[0]} /- and {value[1]} /-
      </div> */}
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

      <div>
        {
          // <Container className="cardlist">
          //   <Row>
          //     {items.map((item) => {
          //       return (
          //         <Col className="col-md-6 col-lg-3 col-xs-12">
          //           <Card
          //             id={item.id}
          //             prodName={item.prodname}
          //             startPrice={item.startprice}
          //             category={item.category}
          //             buyNowPrice={item.buynowprice}
          //             description={item.description}
          //             condition={item.condition_}
          //             image={item.image}
          //             secondsLeft={item.secondsleft}
          //           />
          //         </Col>
          //       );
          //     })}
          //   </Row>
          // </Container>
          <Filter items={items}></Filter>
        }
      </div>
    </div>
  );
};

export default CardList;
