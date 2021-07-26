import {
  BIDFORITEM_ERROR,
  BIDFORITEM_LOADING,
  BIDFORITEM_REQUEST,
  BIDFORITEM_SUCCESS,
} from "../actions/bidForItemTypes";

const initialState = {
  loading: false,
  price: "",
  error: "",
  currentItem: 0,
  currentUser: 0,
  success: {
    price: 0,
    currentItem: 0,
    currentUser: 0,
  },
  isSuccess: false,
};

const BidForItemReducer = (state = initialState, action) => {
  console.log("reducer");
  switch (action.type) {
    case BIDFORITEM_REQUEST:
      console.log("test", action.payload);
      return {
        ...state,
        price: action.payload,
        currentItem: action.currentItem,
        currentUser: action.currentUser,
      };
    case BIDFORITEM_ERROR:
      return {
        ...state,
        loading: action.payload,
      };
    case BIDFORITEM_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case BIDFORITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        succes: {
          price: action.payload,
          currentItem: action.currentItem,
          currentUser: action.currentUser,
        },
        error: "",
        isSuccess: true,
      };

    default:
      return state;
  }
};
export default BidForItemReducer;
