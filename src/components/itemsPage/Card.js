import BidTimer from "./BidTimer";
import "../../styles/Card.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React, { useEffect } from "react";
import MyCountdown from "./MyCountdown";
import Countdown from "react-countdown";

const Card = ({
  fetchExpired,
  id,
  prodName,
  startPrice,
  image,
  condition,
  category,
  buyNowPrice,
  description,
  currentPrice,
  secondsLeft,
}) => {
  const [disable, setDisable] = React.useState(false);
  console.log(image);
  console.log(id, "IDDDDDDCARDDDD");
  return (
    <div className="card">
      <div className="">
        <img src={image} alt="image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark div">
        <p className="card-title overflow-ellipsis title mycardtitle">
          {prodName}
        </p>

        <div className="wrapper">
          <div className="bid">
            <p className="overflow-ellipsis">CURRENT BID</p>
            <p className="overflow-ellipsis price">${currentPrice}</p>
          </div>
          <div className="time">
            <p className="overflow-ellipsis">TIME REMAINING</p>
            <p className="overflow-ellipsis timeperiod">
              <MyCountdown
                sec={secondsLeft * 1000}
                setDisable={setDisable}
                id={id}
                renderer
              />
            </p>
          </div>
        </div>
      </div>

      <div className="parentbtn">
        <form action={`/items/${id}`}>
          <input
            className="btn btn-outline-success btnDiv bidbtn"
            type="submit"
            disabled={disable}
            value="Go to Item"
          />
        </form>
      </div>
    </div>
  );
};

export default Card;
