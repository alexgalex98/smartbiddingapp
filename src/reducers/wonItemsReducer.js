import {
  WONITEMS_FETCH,
  WONITEMS_ERROR,
  WONITEMS_SUCCESS,
  WONITEMS_PENDING,
} from "../actions/wonItemsTypes";

const initialState = {
  loading: false,
  wonItems: [],
  error: "",
};

const WonItemsReducer = (state = initialState, action) => {
  console.log("REDUCERMY");
  switch (action.type) {
    case WONITEMS_FETCH:
      console.log("FETCHWON");
      return {
        ...state,
        loading: true,
        error: "",
      };
    case WONITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case WONITEMS_PENDING:
      return {
        ...state,
        loading: action.payload,
      };
    case WONITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        wonItems: action.payload,
        error: "",
      };
    default:
      return state;
  }
};
export default WonItemsReducer;
