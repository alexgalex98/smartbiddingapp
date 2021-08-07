// import logo from '../../../public/images/ip12.jpg'
// const logo= require('./images/philips1.jpg')
// import "./Bid.css";
import "../../styles/Bid.css";
import BiddersList from "./BiddersList";

const Bid = ({ bid, onPriceChange, onBidSubmit, bidders }) => {
  return (
    <div>
      <div className="details">
        <div className="zoom-img big-img">
          <img src={"/" + bid.image} alt="image" className="card-img-top" />
          <div className="card-badge">
            <p className="badgetext">{bid.condition_}</p>
          </div>
        </div>
        <div className="box itemdetails">
          <div className="row">
            <p className="title">{bid.prodname}</p>
          </div>
          <div className="table-responsive detailstable">
            <table>
              <tr>
                <th className="pl-0 w-25 detailrow" scope="row">
                  <strong> Bid Start price</strong>
                </th>
                <td className="detailrow">${bid.startprice}</td>
              </tr>
              <tr>
                <th className="pl-0 w-25 detailrow" scope="row">
                  <strong>Buy Now Price</strong>
                </th>
                <td className="detailrow"> ${bid.buynowprice}</td>
              </tr>
              <tr>
                <th className="pl-0 w-25 detailrow" scope="row">
                  <strong>Description</strong>
                </th>
                <td className="detailrow">{bid.description}</td>
              </tr>
            </table>
          </div>

          <input onChange={(e) => onPriceChange(e.target.value)}></input>
          <input
            className="bidBtn"
            onClick={onBidSubmit}
            type="submit"
            value="Bid"
          ></input>
          <br></br>
          <button className="buy">Buy Now</button>
        </div>
      </div>
      {console.log(bidders, ": bidderswS")}
      {bidders != "NOT FOUND" && bidders.length > 0 ? (
        <div>
          <BiddersList bidders={bidders}></BiddersList>
        </div>
      ) : (
        <div className="bidderslist">
          <div>
            <h2>Current Bids</h2>
          </div>
          <p>No bids yet!</p>
        </div>
      )}
    </div>
  );
};

export default Bid;

import { BrowserRouter as Link } from "react-router-dom";
import "../../styles/Card.css";
import React from "react";
import MyCountdown from "../itemsPage/MyCountdown";
import Countdown from "react-countdown";

const MyCard = ({
  id,
  prodName,
  startPrice,
  image,
  condition,
  category,
  buyNowPrice,
  description,
  secondsLeft,
}) => {
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
            <p className="overflow-ellipsis price">$11</p>
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

export default MyCard;
