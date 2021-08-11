import {
  SIMILARITEMS_ERROR,
  SIMILARITEMS_FETCH,
  SIMILARITEMS_SUCCESS,
  SIMILARITEMS_PENDING,
  MOSTPOPULARITEMS_ERROR,
  MOSTPOPULARITEMS_FETCH,
  MOSTPOPULARITEMS_PENDING,
  MOSTPOPULARITEMS_SUCCESS,
} from "./homePageTypes";

export const fetchSimilarItems = (id) => {
  console.log("ACTIONMY");
  return {
    payload: id,
    type: SIMILARITEMS_FETCH,
  };
};

export const fetchMostPopularItems = () => {
  console.log("ACTIONPOPULAR");
  return {
    type: MOSTPOPULARITEMS_FETCH,
  };
};

export const fetchSimilarItemsSuccess = (mostPopularItems) => {
  return {
    type: SIMILARITEMS_SUCCESS,
    payload: mostPopularItems,
  };
};

export const fetchMostPopularItemsSuccess = (similarItems) => {
  return {
    type: MOSTPOPULARITEMS_SUCCESS,
    payload: similarItems,
  };
};

export const fetchSimilarItemsFailure = (error) => {
  return {
    type: SIMILARITEMS_ERROR,
    payload: error,
  };
};

export const fetchMostPopularItemsFailure = (error) => {
  return {
    type: MOSTPOPULARITEMS_ERROR,
    payload: error,
  };
};

export const fetchSimilarItemsLoading = (loading) => {
  return {
    type: SIMILARITEMS_PENDING,
    payload: loading,
  };
};

export const fetchMostPopularItemsLoading = (loading) => {
  return {
    type: MOSTPOPULARITEMS_PENDING,
    payload: loading,
  };
};
