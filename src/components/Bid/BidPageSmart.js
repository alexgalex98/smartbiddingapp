import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchBid, loadBid } from "../../actions/bidActions";
import { fetchBidders, loadBidders } from "../../actions/getBiddersAction";
import { bidForItemRequest } from "../../actions/bidForItemActions";
import Bid from "./Bid";

function BidPageSmart({
  bidData,
  fetchBid,
  biddersData,
  fetchBidders,
  newbid,
  bidForItemRequest,
  loadBid,
  match,
  loadBidders,
}) {
  const [price, setPrice] = useState();

  const onPriceChange = (event) => {
    console.log(price);
    setPrice(event);
  };

  const onBidSubmit = async () => {
    console.log("fjffjj", newbid);
    let currentItem = match.params.id;
    let currentUser = localStorage.getItem("user");
    bidForItemRequest(price, currentItem, currentUser);
    console.log(price);
    newbid.price = price;
    console.log("fjffjj", newbid);
    fetchBidders();
    window.location.reload(false);
  };
  //console.log("BAUUUUSE",match.params.id)
  useEffect(() => {
    //fetchBid()
    console.log(match.params.id, "aiiiic");
    loadBid(match.params.id);
    loadBidders(match.params.id);
    //fetchBidders()
  }, [fetchBid, bidForItemRequest]);
  {
    console.log(biddersData, "MIAUUU");
  }
  return bidData.loading ? (
    <h2>Loading</h2>
  ) : bidData.error ? (
    <h2>{bidData.error}</h2>
  ) : (
    <div>
      <div></div>
      <div>
        {
          <Bid
            bid={bidData.bid}
            onPriceChange={onPriceChange}
            onBidSubmit={onBidSubmit}
            bidders={biddersData}
          ></Bid>
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("BAUUU", state.bid.bid.id);
  return {
    bidData: state.bid,
    biddersData: state.getBidders.bidders,
    newbid: state.bidForItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBid: () => dispatch(fetchBid()),
    fetchBidders: () => dispatch(fetchBidders()),
    bidForItemRequest: (price, currentItem, currentUser) =>
      dispatch(bidForItemRequest(price, currentItem, currentUser)),
    loadBid: (id) => dispatch(loadBid(id)),
    loadBidders: (id) => dispatch(loadBidders(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BidPageSmart);
