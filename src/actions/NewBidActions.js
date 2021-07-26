import {
  NEWBID_SUCCESS,
  NEWBID_ERROR,
  NEWBID_LOADING,
  NEWBID_REQUEST,
} from "./NewBidTypes";

export const newBidReq = (
  name,
  category,
  description,
  condition,
  startPrice,
  buyNowPrice,
  bidDuration,
  image,
  created_by
) => {
  return {
    type: NEWBID_REQUEST,
    payload: name,
    category: category,
    description: description,
    condition: condition,
    startPrice: startPrice,
    buyNowPrice: buyNowPrice,
    bidDuration: bidDuration,
    image: image,
    created_by,
  };
};

export const newBidSucces = (
  name,
  category,
  description,
  condition,
  startPrice,
  buyNowPrice,
  bidDuration,
  image,
  created_by
) => {
  console.log(name, category, description, created_by);
  return {
    type: NEWBID_SUCCESS,
    payload: name,
    category: category,
    description: description,
    condition: condition,
    startPrice: startPrice,
    buyNowPrice: buyNowPrice,
    bidDuration: bidDuration,
    image: image,
    created_by,
  };
};

export const newBidError = (error) => {
  return {
    type: NEWBID_ERROR,
    payload: error,
  };
};

export const newBidLoading = (loading) => {
  return {
    type: NEWBID_LOADING,
    payload: loading,
  };
};
