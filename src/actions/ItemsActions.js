import {
  ITEMS_ERROR,
  ITEMS_FETCH,
  ITEMS_SUCCESS,
  ITEMS_PENDING,
} from "./itemTypes";

export const fetchItems = () => {
  console.log("ACTIONITMES");
  return {
    type: ITEMS_FETCH,
  };
};
export const fetchItemsSuccess = (items) => {
  return {
    type: ITEMS_SUCCESS,
    payload: items,
  };
};

export const fetchItemsFailure = (error) => {
  return {
    type: ITEMS_ERROR,
    payload: error,
  };
};
export const fetchItemsLoading = (loading) => {
  return {
    type: ITEMS_PENDING,
    payload: loading,
  };
};
