import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchBid, loadBid } from "../../actions/bidActions";
import { fetchBidders, loadBidders } from "../../actions/getBiddersAction";
import {
  bidForItemRequest,
  buyItemRequest,
} from "../../actions/bidForItemActions";
import { fetchSimilarItems } from "../../actions/homePageActions";
import Bid from "./Bid";
import NavBar from "../Navbar";
import SimilarCardList from "./similarCardList";

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
  buyItemRequest,
  fetchSimilarItems,
  similarItems,
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
    if (price > bidData.bid.currentprice) {
      bidForItemRequest(price, currentItem, currentUser);
      window.location.replace(`${bidData.bid.id}`);
    }
    console.log(price);
    newbid.price = price;
    console.log("fjffjj", newbid);
    fetchBidders();
  };

  const onBuySubmit = async () => {
    let currentItem = match.params.id;
    let currentUser = localStorage.getItem("user");
    buyItemRequest(currentItem, currentUser);
    console.log("ONBUYSUBMIT");
  };
  //console.log("BAUUUUSE",match.params.id)
  useEffect(() => {
    //fetchBid()
    fetchSimilarItems(match.params.id);
    console.log(match.params.id, "aiiiic");
    loadBid(match.params.id);
    loadBidders(match.params.id);
    //fetchBidders()
  }, [fetchBid, bidForItemRequest]);

  console.log(biddersData, "MIAUUU");
  return bidData.loading ? (
    <h2>Loading</h2>
  ) : bidData.error ? (
    <h2>{bidData.error}</h2>
  ) : (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <div>
        {/* {<MyCountdown sec={bidData.bid.secondsleft * 1000} />} */}
        {
          <Bid
            bid={bidData.bid}
            onPriceChange={onPriceChange}
            onBidSubmit={onBidSubmit}
            onBuySubmit={onBuySubmit}
            bidders={biddersData}
            secondsleft={bidData.bid.secondsleft}
          ></Bid>
        }
      </div>
      <div>
        <SimilarCardList items={similarItems.similarItems}></SimilarCardList>
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
    buyItem: state.buyItem,
    similarItems: state.similarItems,
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
    buyItemRequest: (currentItem, currentUser) =>
      dispatch(buyItemRequest(currentItem, currentUser)),
    fetchSimilarItems: (id) => dispatch(fetchSimilarItems(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BidPageSmart);
