import {
  LASTITEMS_FETCH,
  LASTITEMS_ERROR,
  LASTITEMS_PENDING,
  LASTITEMS_SUCCESS,
} from "./lastItemsTypes";

export const fetchLastItems = () => {
  console.log("ACTIONLASTITEMS");
  return {
    type: LASTITEMS_FETCH,
  };
};

export const fetchLastItemsSuccess = (lastItems) => {
  return {
    type: LASTITEMS_SUCCESS,
    payload: lastItems,
  };
};

export const fetchLastItemsFailure = (error) => {
  return {
    type: LASTITEMS_ERROR,
    payload: error,
  };
};

export const fetchLastItemsLoading = (loading) => {
  return {
    type: LASTITEMS_PENDING,
    payload: loading,
  };
};
