import {
  ONBIDDEDITEMS_FETCH,
  ONBIDDEDITEMS_ERROR,
  ONBIDDEDITEMS_SUCCESS,
  ONBIDDEDITEMS_PENDING,
} from "../actions/onBiddedItemsTypes";

const initialState = {
  loading: false,
  onBiddedItems: [],
  error: "",
};

const OnBiddedItemsReducer = (state = initialState, action) => {
  console.log("REDUCERONBIDDED");
  switch (action.type) {
    case ONBIDDEDITEMS_FETCH:
      console.log("FETCHONBIDD");
      return {
        ...state,
        loading: true,
        error: "",
      };
    case ONBIDDEDITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ONBIDDEDITEMS_PENDING:
      return {
        ...state,
        loading: action.payload,
      };
    case ONBIDDEDITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        onBiddedItems: action.payload,
        error: "",
      };
    default:
      console.log("DEFAULT");
      return state;
  }
};
export default OnBiddedItemsReducer;
