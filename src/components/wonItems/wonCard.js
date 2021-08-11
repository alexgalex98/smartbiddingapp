import React from "react";
import MyCountdown from "../itemsPage/MyCountdown";
import "../../styles/Card.css";
import { Link } from "react-router-dom";

const WonCard = ({
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
  console.log(
    id,
    "ID",
    prodName,
    "PRODNAME",
    startPrice,
    "STARTPRICE",
    image,
    "IMAGE",
    condition,
    "CONDITION",
    category,
    "CAT",
    buyNowPrice,
    "BUYPRICE",
    description,
    "DESC",
    secondsLeft,
    "SECONDS"
  );
  console.log(image);

  return (
    <div className="card">
      <div className="">
        <img src={image} alt="image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark div">
        <p className="card-title overflow-ellipsis title">{prodName}</p>
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
      <div className="parentbtnUpdate flex-parent jc-center">
        <Link to={`/items/${id}`} className="btn margin-right">
          More Details
        </Link>
      </div>
    </div>
  );
};

export default WonCard;
