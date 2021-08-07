import {
  ONBIDDEDITEMS_ERROR,
  ONBIDDEDITEMS_FETCH,
  ONBIDDEDITEMS_SUCCESS,
  ONBIDDEDITEMS_PENDING,
} from "./onBiddedItemsTypes";

export const fetchItems = () => {
  console.log("ACTIONONBIDDED");
  return {
    type: ONBIDDEDITEMS_FETCH,
  };
};
export const fetchItemsSuccess = (onBiddedItems) => {
  return {
    type: ONBIDDEDITEMS_SUCCESS,
    payload: onBiddedItems,
  };
};

export const fetchItemsFailure = (error) => {
  return {
    type: ONBIDDEDITEMS_ERROR,
    payload: error,
  };
};
export const fetchItemsLoading = (loading) => {
  return {
    type: ONBIDDEDITEMS_PENDING,
    payload: loading,
  };
};
