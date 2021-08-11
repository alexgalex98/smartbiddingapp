import {
  EXPIRED_ERROR,
  EXPIRED_FETCH,
  EXPIRED_PENDING,
  EXPIRED_SUCCESS,
} from "../actions/itemTypes";

const initialState = {
  loading: false,
  error: "",
};
const ExpiredItemsReducer = (state = initialState, action) => {
  console.log("REDUCER EXPIRED");
  switch (action.type) {
    case EXPIRED_FETCH:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case EXPIRED_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case EXPIRED_PENDING:
      return {
        ...state,
        loading: action.payload,
      };
    case EXPIRED_SUCCESS:
      return {
        loading: false,
        error: "",
      };

    default:
      return state;
  }
};
export default ExpiredItemsReducer;
