import {
  SIMILARITEMS_FETCH,
  SIMILARITEMS_ERROR,
  SIMILARITEMS_SUCCESS,
  SIMILARITEMS_PENDING,
} from "../actions/homePageTypes";

const initialState = {
  loading: false,
  similarItems: [],
  error: "",
};

const SimilarItemsReducer = (state = initialState, action) => {
  console.log("REDUCERMY");
  switch (action.type) {
    case SIMILARITEMS_FETCH:
      console.log("FETCHSIMILAR");
      return {
        ...state,
        loading: true,
        error: "",
      };
    case SIMILARITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SIMILARITEMS_PENDING:
      return {
        ...state,
        loading: action.payload,
      };
    case SIMILARITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        similarItems: action.payload,
        error: "",
      };
    default:
      return state;
  }
};
export default SimilarItemsReducer;
