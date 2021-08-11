import {
  BUYITEM_ERROR,
  BUYITEM_LOADING,
  BUYITEM_REQUEST,
  BUYITEM_SUCCESS,
} from "../actions/bidForItemTypes";

const initialState = {
  loading: false,
  error: "",
  currentItem: 0,
  currentUser: 0,
  success: {
    currentItem: 0,
    currentUser: 0,
  },
  isSuccess: false,
};

const BuyItemReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case BUYITEM_REQUEST:
      console.log("test", action.payload);
      return {
        ...state,
        currentItem: action.currentItem,
        currentUser: action.currentUser,
      };
    case BUYITEM_ERROR:
      return {
        ...state,
        loading: action.payload,
      };
    case BUYITEM_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case BUYITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        succes: {
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
export default BuyItemReducer;
