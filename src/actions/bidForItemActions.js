import {
  BIDFORITEM_ERROR,
  BIDFORITEM_REQUEST,
  BIDFORITEM_LOADING,
  BIDFORITEM_SUCCESS,
  BUYITEM_ERROR,
  BUYITEM_REQUEST,
  BUYITEM_LOADING,
  BUYITEM_SUCCESS,
  UPDATECURRENTPRICE_ERROR,
  UPDATECURRENTPRICE_LOADING,
  UPDATECURRENTPRICE_REQUEST,
  UPDATECURRENTPRICE_SUCCESS,
} from "./bidForItemTypes";

export const bidForItemRequest = (price, currentItem, currentUser) => {
  // console.log("actionsbid", price, currentItem);
  return {
    type: BIDFORITEM_REQUEST,
    payload: price,
    currentItem: currentItem,
    currentUser: currentUser,
  };
};
export const buyItemRequest = (currentItem, currentUser) => {
  console.log("ACTIONBUYY", currentUser, currentItem);
  return {
    type: BUYITEM_REQUEST,
    currentItem: currentItem,
    currentUser: currentUser,
  };
};

export const bidForItemSuccess = (price, currentItem, currentUser) => {
  console.log("actions", price, currentItem);
  return {
    type: BIDFORITEM_SUCCESS,
    payload: price,
    currentItem: currentItem,
    currentUser: currentUser,
  };
};

export const buyItemSuccess = (currentItem, currentUser) => {
  // console.log("actions", price, currentItem);
  return {
    type: BUYITEM_SUCCESS,
    currentItem: currentItem,
    currentUser: currentUser,
  };
};

export const bidForItemFailure = (error) => {
  return {
    type: BIDFORITEM_ERROR,
    payload: error,
  };
};

export const buyItemFailure = (error) => {
  return {
    type: BUYITEM_ERROR,
    payload: error,
  };
};

export const bidForItemLoading = (loading) => {
  return {
    type: BIDFORITEM_LOADING,
    payload: loading,
  };
};

export const buyItemLoading = (loading) => {
  return {
    type: BUYITEM_LOADING,
    payload: loading,
  };
};
