import {
  APPROVEITEM_ERROR,
  APPROVEITEM_REQUEST,
  APPROVEITEM_LOADING,
  APPROVEITEM_SUCCESS,
  DISAPPROVEITEM_ERROR,
  DISAPPROVEITEM_REQUEST,
  DISAPPROVEITEM_LOADING,
  DISAPPROVEITEM_SUCCESS,
} from "./approveItemType";

export const approveItemRequest = (id) => {
  // console.log("actionsbid", price, currentItem);
  return {
    type: APPROVEITEM_REQUEST,
    payload: id,
  };
};

export const disapproveItemRequest = (id) => {
  // console.log("actionsbid", price, currentItem);
  return {
    type: DISAPPROVEITEM_REQUEST,
    payload: id,
  };
};

export const approveItemSuccess = (id) => {
  console.log("actionsAPPROVE", id);
  return {
    type: APPROVEITEM_SUCCESS,
    payload: id,
  };
};

export const disapproveItemSuccess = (id) => {
  console.log("actionsAPPROVE", id);
  return {
    type: DISAPPROVEITEM_SUCCESS,
    payload: id,
  };
};

export const approveItemFailure = (error) => {
  return {
    type: APPROVEITEM_ERROR,
    payload: error,
  };
};

export const disapproveItemFailure = (error) => {
  return {
    type: DISAPPROVEITEM_ERROR,
    payload: error,
  };
};

export const approveItemLoading = (loading) => {
  return {
    type: APPROVEITEM_LOADING,
    payload: loading,
  };
};

export const disapproveItemLoading = (loading) => {
  return {
    type: DISAPPROVEITEM_LOADING,
    payload: loading,
  };
};
