import {
  UPDATEITEM_ERROR,
  UPDATEITEM_LOADING,
  UPDATEITEM_REQUEST,
  UPDATEITEM_SUCCESS,
} from "./updateItemTypes";

export const updateItemRequest = (
  id,
  name,
  category,
  description,
  condition,
  startprice,
  buynowprice,
  secondsleft
) => {
  console.log("AM INTRAT IN REQUEST");
  return {
    type: UPDATEITEM_REQUEST,
    payload: id,
    name: name,
    category: category,
    description: description,
    condition: condition,
    startprice: startprice,
    buynowprice: buynowprice,
    secondsleft: secondsleft,
  };
};

export const updateItemSuccess = (
  id,
  name,
  category,
  description,
  condition,
  startprice,
  buynowprice,
  secondsleft
) => {
  console.log("actionsAPPROVE", id);
  return {
    type: UPDATEITEM_SUCCESS,
    payload: id,
    name: name,
    category: category,
    description: description,
    condition: condition,
    startprice: startprice,
    buynowprice: buynowprice,
    secondsleft: secondsleft,
  };
};

export const updateItemLoading = (loading) => {
  return {
    type: UPDATEITEM_LOADING,
    payload: loading,
  };
};

export const updateItemFailure = (error) => {
  return {
    type: UPDATEITEM_ERROR,
    payload: error,
  };
};
