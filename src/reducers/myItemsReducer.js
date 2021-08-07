import {
  MYITEMS_FETCH,
  MYITEMS_ERROR,
  MYITEMS_SUCCESS,
  MYITEMS_PENDING,
} from "../actions/myItemsTypes";

const initialState = {
  loading: false,
  myItems: [],
  error: "",
};

const MyItemsReducer = (state = initialState, action) => {
  console.log("REDUCERMY");
  switch (action.type) {
    case MYITEMS_FETCH:
      console.log("FETCHMY");
      return {
        ...state,
        loading: true,
        error: "",
      };
    case MYITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case MYITEMS_PENDING:
      return {
        ...state,
        loading: action.payload,
      };
    case MYITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        myItems: action.payload,
        error: "",
      };
    default:
      return state;
  }
};
export default MyItemsReducer;
