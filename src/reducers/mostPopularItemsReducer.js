import {
  MOSTPOPULARITEMS_ERROR,
  MOSTPOPULARITEMS_FETCH,
  MOSTPOPULARITEMS_PENDING,
  MOSTPOPULARITEMS_SUCCESS,
} from "../actions/homePageTypes";

const initialState = {
  loading: false,
  mostPopularItems: [],
  error: "",
};
const MostPopularItemsReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case MOSTPOPULARITEMS_FETCH:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case MOSTPOPULARITEMS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case MOSTPOPULARITEMS_PENDING:
      return {
        ...state,
        loading: action.payload,
      };
    case MOSTPOPULARITEMS_SUCCESS:
      console.log("SUCCESSS", action.payload);
      return {
        loading: false,
        mostPopularItems: action.payload,
        error: "",
      };

    default:
      return state;
  }
};
export default MostPopularItemsReducer;
