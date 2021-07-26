import {
  GETBIDDERS_ERROR,
  GETBIDDERS_FETCH,
  GETBIDDERS_LOAD,
  GETBIDDERS_PENDING,
  GETBIDDERS_SUCCESS,
} from "./getBiddersTypes";

export const fetchBidders = () => {
  return {
    type: GETBIDDERS_FETCH,
  };
};
export const fetchBiddersSuccess = (bids) => {
  return {
    type: GETBIDDERS_SUCCESS,
    payload: bids,
  };
};

export const fetchBiddersFailure = (error) => {
  return {
    type: GETBIDDERS_ERROR,
    payload: error,
  };
};
export const fetchBiddersLoading = (loading) => {
  return {
    type: GETBIDDERS_PENDING,
    payload: loading,
  };
};

export const loadBidders = (id) => {
  return {
    type: GETBIDDERS_LOAD,
    payload: id,
  };
};
