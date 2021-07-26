import {
  BID_ERROR,
  BID_FETCH,
  BID_PENDING,
  BID_SUCCESS,
  LOAD_BID,
} from "./bidTypes";

export const fetchBid = () => {
  return {
    type: BID_FETCH,
  };
};
export const fetchBidSuccess = (bid) => {
  console.log(bid);
  return {
    type: BID_SUCCESS,
    payload: bid,
  };
};

export const loadBid = (id) => {
  return {
    type: LOAD_BID,
    payload: id,
  };
};
export const fetchBidFailure = (error) => {
  return {
    type: BID_ERROR,
    payload: error,
  };
};
export const fetchBIdLoading = (loading) => {
  return {
    type: BID_PENDING,
    payload: loading,
  };
};
