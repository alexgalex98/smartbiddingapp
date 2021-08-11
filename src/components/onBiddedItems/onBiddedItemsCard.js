import React from "react";
import MyCountdown from "../itemsPage/MyCountdown";
import Countdown from "react-countdown";
import "../../styles/Card.css";
import { Link } from "react-router-dom";

const OnBiddedItemsCard = ({
  id,
  prodName,
  startPrice,
  image,
  condition,
  category,
  buyNowPrice,
  description,
  secondsLeft,
  currentPrice,
}) => {
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
              <MyCountdown sec={secondsLeft * 1000} renderer />
            </p>
          </div>
        </div>
      </div>
      <div className="parentbtn">
        <Link
          to={`/items/${id}`}
          className="btn btn-outline-success btnDiv bidbtn"
        >
          Go to bid
        </Link>
      </div>
    </div>
  );
};

export default OnBiddedItemsCard;
