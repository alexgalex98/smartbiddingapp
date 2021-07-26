import {
  BIDFORITEM_ERROR,
  BIDFORITEM_REQUEST,
  BIDFORITEM_LOADING,
  BIDFORITEM_SUCCESS,
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
export const bidForItemSuccess = (price, currentItem, currentUser) => {
  console.log("actions", price, currentItem);
  return {
    type: BIDFORITEM_SUCCESS,
    payload: price,
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
export const bidForItemLoading = (loading) => {
  return {
    type: BIDFORITEM_LOADING,
    payload: loading,
  };
};
