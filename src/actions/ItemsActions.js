import { FaRegObjectUngroup } from "react-icons/fa";
import {
  ITEMS_ERROR,
  ITEMS_FETCH,
  ITEMS_SUCCESS,
  ITEMS_PENDING,
  EXPIRED_FETCH,
  EXPIRED_ERROR,
  EXPIRED_PENDING,
  EXPIRED_SUCCESS,
} from "./itemTypes";

export const fetchItems = () => {
  console.log("ACTIONITMES");
  return {
    type: ITEMS_FETCH,
  };
};

export const fetchExpired = (id) => {
  return { type: EXPIRED_FETCH, payload: id };
};

export const fetchItemsSuccess = (items) => {
  return {
    type: ITEMS_SUCCESS,
    payload: items,
  };
};

export const fetchExpiredSuccess = (product) => {
  return {
    type: EXPIRED_SUCCESS,
    payload: product,
  };
};

export const fetchItemsFailure = (error) => {
  return {
    type: ITEMS_ERROR,
    payload: error,
  };
};

export const fetchExpiredFailure = (error) => {
  return { type: EXPIRED_ERROR };
};

export const fetchItemsLoading = (loading) => {
  return {
    type: ITEMS_PENDING,
    payload: loading,
  };
};

export const fetchExpiredLoading = (loading) => {
  return { type: EXPIRED_PENDING };
};
