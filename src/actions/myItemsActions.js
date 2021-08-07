import {
  MYITEMS_ERROR,
  MYITEMS_FETCH,
  MYITEMS_SUCCESS,
  MYITEMS_PENDING,
} from "./myItemsTypes";

export const fetchItems = () => {
  console.log("ACTIONMY");
  return {
    type: MYITEMS_FETCH,
  };
};
export const fetchItemsSuccess = (myItems) => {
  return {
    type: MYITEMS_SUCCESS,
    payload: myItems,
  };
};

export const fetchItemsFailure = (error) => {
  return {
    type: MYITEMS_ERROR,
    payload: error,
  };
};
export const fetchItemsLoading = (loading) => {
  return {
    type: MYITEMS_PENDING,
    payload: loading,
  };
};
