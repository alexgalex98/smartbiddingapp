import {
  WONITEMS_ERROR,
  WONITEMS_FETCH,
  WONITEMS_SUCCESS,
  WONITEMS_PENDING,
} from "./wonItemsTypes";

export const fetchWonItems = () => {
  console.log("ACTIONMY");
  return {
    type: WONITEMS_FETCH,
  };
};
export const fetchWonItemsSuccess = (wonItems) => {
  return {
    type: WONITEMS_SUCCESS,
    payload: wonItems,
  };
};

export const fetchWonItemsFailure = (error) => {
  return {
    type: WONITEMS_ERROR,
    payload: error,
  };
};
export const fetchWonItemsLoading = (loading) => {
  return {
    type: WONITEMS_PENDING,
    payload: loading,
  };
};
